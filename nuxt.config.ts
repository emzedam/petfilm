// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/app.css',
    'swiper/css/pagination',
    'swiper/css/navigation',
    'swiper/css'
  ],
  runtimeConfig: {
    public: {
      appBaseUrl: 'http://localhost:8000'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      require('vite-svg-loader')()
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl',
        class: ["dark"]
      },
      title: 'پت فیلم | پت و من',
      meta: [
        { name: 'description', content: 'Pet Film Website' }
      ],
      bodyAttrs: {
        class: 'bg-slate-100/70 dark:bg-stone-950 font-amir'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/petomanfavicon.png' }
      ]
    }
  }
  
})
