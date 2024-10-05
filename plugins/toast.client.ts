import { defineNuxtPlugin } from '#app'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default defineNuxtPlugin((nuxtApp) => {
    // رجیستر کردن VueToast در vueApp
    nuxtApp.vueApp.use(VueToast , {
        position: 'bottom-right', // محل پیش‌فرض نمایش توست
        duration: 5000,        // زمان نمایش به میلی‌ثانیه
        dismissible: true,     // امکان بسته شدن توست‌ها توسط کاربر
        pauseOnHover: true,    // مکث در هنگام هاور شدن روی توست
    })

    nuxtApp.provide('toast', nuxtApp.vueApp.config.globalProperties.$toast)
  })