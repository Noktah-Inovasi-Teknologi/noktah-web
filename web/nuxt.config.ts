// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthub/core", "shadcn-nuxt", "@vueuse/nuxt"],
  css: ["@/assets/styles/base.css"],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
  compatibilityDate: "2024-12-26",
});