export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return relay(event, () => fetch(hubUrl(event, '/public/contact'), {
    method: 'POST',
    headers: hubHeaders(event, { 'content-type': 'application/json' }),
    body: JSON.stringify(body ?? {}),
  }))
})
