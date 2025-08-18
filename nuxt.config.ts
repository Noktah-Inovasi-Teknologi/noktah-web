// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui"],
  
  // Global SEO & App Configuration
  app: {
    head: {
      title: 'Noktah Inovasi Teknologi - Cross-Field Innovation',
      meta: [
        { name: 'description', content: 'Innovation-driven company building cross-field solutions that redefine what\'s possible in technology, creativity, business, and beyond.' },
        { name: 'author', content: 'Noktah Inovasi Teknologi' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#6366F1' },
        { name: 'msapplication-TileColor', content: '#6366F1' },
        { name: 'msapplication-config', content: '/images/favicon/browserconfig.xml' },
        { property: 'og:site_name', content: 'Noktah Inovasi Teknologi' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'id_ID' },
        { name: 'twitter:site', content: '@noktah_it' },
        { name: 'twitter:creator', content: '@noktah_it' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
        { rel: 'canonical', href: 'https://noktah.co' }
      ]
    }
  },
  
  ui: {
    fonts: true
  },
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
});
