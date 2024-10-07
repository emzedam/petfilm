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
