// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxt/image'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          postcss: {
            plugins: {
              '@tailwindcss/vite': {}
            }
          }
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
            'vue': ['vue', 'vue-router']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['gsap']
    }
  },

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

  image: {
    formats: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1E40AF' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'The 100-Year Pulse' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' }
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
      routes: ['/sitemap.xml'],
      failOnError: false
    },
    compressPublicAssets: true
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  compatibilityDate: '2024-04-03'
})
