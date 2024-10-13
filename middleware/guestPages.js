import { usePetfilmStore } from '@/store/petfilmStore'
export default defineNuxtRouteMiddleware((to, from) => {
    const store = usePetfilmStore()
    const authUser = store.authUser; // دریافت authUser از pinia
  
    const authPages = ['/auth/login', '/auth/register', '/auth/otp'];
  
    // اگر authUser مقدار داشت و کاربر به یکی از صفحات لاگین رجوع کرده بود
    if (authUser && authPages.includes(to.path)) {
      return navigateTo('/');
    }
  });
  