export default defineNuxtRouteMiddleware((to, from) => {
  // گرفتن اسلاگ از مسیر
  const slug = to.params.slug
  
  // تعریف regex برای ولیدیت کردن اسلاگ با پشتیبانی از ساختار پیچیده‌تر
  const slugPattern = /^[a-zA-Zآ-ی0-9-]+-\d+$/

  // بررسی صحت اسلاگ و ریدایرکت به صفحه اصلی در صورت نامعتبر بودن
  if (!slug || !slugPattern.test(slug)) {
    return navigateTo('/')
  }
})
