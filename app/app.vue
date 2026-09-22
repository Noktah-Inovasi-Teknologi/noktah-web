<template>
  <UApp>
    <AmbientField />
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>

<script setup>
/**
 * Locale-aware document head: sets <html lang>, the per-page canonical,
 * and the hreflang alternates linking the Indonesian and English versions
 * of whatever page is being viewed.
 *
 * Previously nuxt.config pinned a single canonical to https://noktah.co,
 * which told search engines every page was the homepage.
 */
const head = useLocaleHead({ dir: true, seo: true })

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang,
    dir: head.value.htmlAttrs?.dir,
  },
  link: head.value.link,
  meta: head.value.meta,
}))
</script>
