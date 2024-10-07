import api from '@/axios/index'
import { usePetfilmStore } from '@/store/petfilmStore'
import { useCookie } from '#app'

export default defineNuxtRouteMiddleware(async () => {
  const store = usePetfilmStore()

  // دریافت کوکی‌های token و refreshToken
  const tokenCookie = useCookie('token')
  const refreshTokenCookie = useCookie('refresh')

  if (tokenCookie.value && refreshTokenCookie.value) {
    try {
      // ارسال درخواست با استفاده از axios
      const response = await api.get('/users/user', {
        headers: {
          Authorization: `Bearer ${tokenCookie.value}`,
        },
      })
      // ذخیره کاربر در Pinia
      store.setAuthUser(response.data)
    } catch (error) {
      console.error('Error fetching user:', error)
      store.clearAuthUser()
    }
  } else {
    store.clearAuthUser()
  }
})
