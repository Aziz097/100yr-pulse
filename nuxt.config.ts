// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700, 800],
      'Outfit': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    preload: true,
    inject: true,
    prefetch: true,
    preconnect: true
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1E40AF' }
      ]
    }
  },

  site: {
    url: 'https://the100yearpulse.com',
    name: 'The 100-Year Pulse',
    description: 'Molecular Longevity Meets the Art of Purposeful Living',
    defaultLocale: 'en'
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

  compatibilityDate: '2024-04-03'
})
