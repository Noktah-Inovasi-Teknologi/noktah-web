export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module"],
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/base.css"],

  primevue: {
    options: { theme: "none" },
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-12-26",
});