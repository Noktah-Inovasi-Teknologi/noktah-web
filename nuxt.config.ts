// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],

  icon: {
    // Without a local bundle, Nuxt Icon falls back to fetching every icon
    // from the Iconify CDN at runtime — which is why icons rendered as empty
    // spans whenever that request was slow, blocked or offline.
    //
    // heroicons + lucide are bundled server-side: lucide is used internally
    // by Nuxt UI components, so it cannot be found by scanning our source.
    // simple-icons is NOT bundled — we use three of its ~3,000 brand icons,
    // and shipping the whole set added 4.6 MB to the server build. Those
    // three are written as literals in our templates, so the client scan
    // picks them up instead.
    serverBundle: {
      collections: ["heroicons", "lucide"],
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },

  i18n: {
    // Indonesian is the default and carries no URL prefix, so noktah.co/
    // stays the Indonesian site and English lives under /en/*.
    baseUrl: "https://noktah.co",
    defaultLocale: "id",
    strategy: "prefix_except_default",
    locales: [
      // Split per page: 4k+ words of copy in one blob is unreviewable.
      {
        code: "id",
        language: "id-ID",
        name: "Bahasa Indonesia",
        files: ["id/common.json", "id/home.json", "id/about.json", "id/brands.json", "id/contact.json", "id/privacy.json", "id/terms.json"],
      },
      {
        code: "en",
        language: "en-US",
        name: "English",
        files: ["en/common.json", "en/home.json", "en/about.json", "en/brands.json", "en/contact.json", "en/privacy.json", "en/terms.json"],
      },
    ],
    // Accept-Language rather than IP geolocation: it reflects what the
    // reader actually set, survives VPNs and travel, and does not vary
    // per-request in a way that breaks caching or prerendering.
    // Once someone picks a language the cookie wins from then on.
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "noktah_lang",
      redirectOn: "root",
      fallbackLocale: "id",
      alwaysRedirect: false,
    },
    bundle: { optimizeTranslationDirective: false },
  },
  
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
        { rel: 'manifest', href: '/images/favicon/site.webmanifest' }
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
