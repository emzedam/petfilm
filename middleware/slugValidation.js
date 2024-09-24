export default defineNuxtRouteMiddleware((to, from) => {
    // چک کردن اینکه آیا اسلاگ در مسیر وجود دارد یا خیر
    const slug = to.params.slug
    
    // تعریف regex برای ولیدیت کردن اسلاگ
    const slugPattern = /^[a-zA-Zا-ی-]+-\d+$/
    console.log(slugPattern.test(slug))
  
    // اگر اسلاگ موجود نبود یا با regex مطابقت نداشت، ریدایرکت به صفحه اصلی
    if (!slug || !slugPattern.test(slug)) {
      return navigateTo('/')
    }
  })
  