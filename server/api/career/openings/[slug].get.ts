export default defineEventHandler((event) => {
  const locale = getQuery(event).locale === 'en' ? 'en' : 'id'
  const slug = getRouterParam(event, 'slug') ?? ''
  return cachedHubGet(event, `/public/openings/${encodeURIComponent(slug)}?locale=${locale}`)
})
