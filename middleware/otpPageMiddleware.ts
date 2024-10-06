export default defineNuxtRouteMiddleware((to, from) => {
    // دسترسی به کوکی
    const urequest = useCookie('_urequest')
  
    // اگر کوکی وجود نداشت، ریدایرکت به صفحه لاگین
    if (!urequest.value) {
      return navigateTo('/auth/login')
    }
  })
  