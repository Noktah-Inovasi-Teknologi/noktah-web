// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui"],
  ui: {
    fonts: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
});
