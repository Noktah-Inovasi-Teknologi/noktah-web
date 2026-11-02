// Calls to hub-api through Cloudflare Access. The service token and the base URL stay in server-only runtime config.
import type { H3Event } from 'h3'

export function hubUrl(event: H3Event, path: string) {
  const base = useRuntimeConfig(event).hubApiBase.replace(/\/+$/, '')
  if (!base) throw createError({ statusCode: 503, data: { error: 'unavailable' } })
  return base + path
}

export function hubHeaders(event: H3Event, extra: Record<string, string> = {}) {
  const c = useRuntimeConfig(event)
  const ip = getRequestHeader(event, 'cf-connecting-ip')
  return {
    'CF-Access-Client-Id': c.accessClientId,
    'CF-Access-Client-Secret': c.accessClientSecret,
    ...(ip ? { 'X-Applicant-IP': ip } : {}),
    ...extra,
  }
}

// Hub answers a person can act on (invalid, closed, spam, unreadable_file, delivery_failed) go through as they are;
// anything else, or no answer at all, is "try again shortly".
export async function relay(event: H3Event, call: () => Promise<Response>) {
  let res: Response
  try {
    res = await call()
  } catch {
    setResponseStatus(event, 503)
    return { error: 'unavailable' }
  }
  const body = await res.json().catch(() => null) as Record<string, unknown> | null
  if (body && (res.ok || res.status < 500 || body.error === 'delivery_failed')) {
    setResponseStatus(event, res.status)
    return body
  }
  setResponseStatus(event, 503)
  return { error: 'unavailable' }
}

const FRESH_MS = 120_000
const KEEP_S = 30 * 24 * 3600

// Cloudflare Cache API (spec 033 research R-3): fresh for 120 s; when hub-api fails, the last copy (kept 30 days) is
// served. shortcut: the cache is per data centre and may be evicted; move to KV if "can't load" is ever seen in an outage.
export async function cachedHubGet(event: H3Event, path: string) {
  const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default
  const key = new Request('https://noktah.co/__hub-cache' + path)
  const hit = await cache?.match(key).catch(() => undefined)
  const age = hit ? Date.now() - Number(hit.headers.get('x-cached-at')) : Infinity
  if (hit && age < FRESH_MS) return await hit.json()

  let res: Response | undefined
  try {
    res = await fetch(hubUrl(event, path), { headers: hubHeaders(event, { Accept: 'application/json' }) })
  } catch { /* falls through to the stale copy */ }

  if (res?.ok) {
    const body = await res.text()
    await cache?.put(key, new Response(body, {
      headers: { 'content-type': 'application/json', 'cache-control': `max-age=${KEEP_S}`, 'x-cached-at': String(Date.now()) },
    })).catch(() => {})
    return JSON.parse(body)
  }
  if (res && res.status < 500) {   // the position is not open (any more): not a failure
    await cache?.delete(key).catch(() => {})
    throw createError({ statusCode: res.status, data: { error: res.status === 404 ? 'not_found' : 'invalid' } })
  }
  if (hit) return await hit.json()
  throw createError({ statusCode: 503, data: { error: 'unavailable' } })
}
