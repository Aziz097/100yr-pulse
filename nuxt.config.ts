import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700, 800],
      'Outfit': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
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
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2024-04-03'
})
