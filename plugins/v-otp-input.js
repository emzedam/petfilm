import { defineNuxtPlugin } from '#app'
import Vue3OtpInput from 'vue3-otp-input'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Vue3OtpInput', Vue3OtpInput)
})
