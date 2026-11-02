export default defineEventHandler((event) => {
  const locale = getQuery(event).locale === 'en' ? 'en' : 'id'
  return cachedHubGet(event, `/public/openings?locale=${locale}`)
})
