<template>
    <div class="overflow-y-auto w-full mx-auto lg:px-6 px-3">
        <Content :categoryInfo="categoryInfo" />
    </div>
</template>

<script setup>
import Content from '@/components/archive/Content.vue'
import {usePetfilmStore} from '@/store/petfilmStore.js'
import {useRoute} from 'vue-router'

definePageMeta({
  middleware: 'slug-validation'
})

const route = useRoute()
const categoryInfo = ref(null) 
const store = usePetfilmStore()

onMounted(async () => {
  await getCategoryDetail()
})

const getCategoryDetail = async () => {
  const splitSlug = route.params.slug.split("-")
  const catId = splitSlug[splitSlug.length-1]

  const result = await store.get_category_detail({
    id: catId
  })

  if(result.status == 200) {
    categoryInfo.value = result.data
    console.log(categoryInfo.value)
  }
}


</script>