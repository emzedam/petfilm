import { usePetfilmStore } from '@/store/petfilmStore'
export default defineNuxtRouteMiddleware((to, from) => {
    const store = usePetfilmStore()
    const authUser = store.authUser;
  
    const authPages = ['/favorites'];

    if (!authUser && authPages.includes(to.path)) {
      return navigateTo('/');
    }
  });
  