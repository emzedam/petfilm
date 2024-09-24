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
      appBaseUrl: 'https://petfilm.petoman.com'
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
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl'
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
