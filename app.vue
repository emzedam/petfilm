<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import {usePetfilmStore} from '@/store/petfilmStore.js'
  import {storeToRefs} from 'pinia'
  import { useHead } from 'nuxt/app'
  import { watchEffect } from 'vue'
  
  // const { theme } = storeToRefs(usePetfilmStore())

  // onMounted(() => {
  //   const htmlTag = document.documentElement
  //   htmlTag.className = theme.value // اضافه کردن کلاس بر اساس تم فعلی
  // })

  // watch(theme, (newTheme) => {
  //   const htmlTag = document.documentElement
  //   htmlTag.className = '' 
  //   htmlTag.classList.add(newTheme)
  // })
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white; /* تغییر رنگ آیکون‌ها به سفید */
}

/* برای تغییر رنگ آیکون‌ها هنگام hover */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #f0f0f0; /* رنگ روشن‌تر در حالت hover */
}
</style>
