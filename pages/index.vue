<template>
    <div class="overflow-y-auto w-full mx-auto lg:px-6 px-3">

        <FullCover :initData="initData" />

        <Categories :initData="initData" />

        <Content :initData="initData" />

        
    </div>
</template>

<script setup>
import FullCover from '@/components/main/FullCover.vue'
import Categories from '@/components/main/Categories.vue'
import Content from '@/components/main/Content.vue'
import {usePetfilmStore} from '@/store/petfilmStore.js'

const petfilmStore = usePetfilmStore()
const initData = ref(null)

onMounted(async () => {
    await initializeData()
})

const initializeData = async () => {
    const result = await petfilmStore.get_initializ_data()
    if(result.status == 200){
        // console.log(result.data)
        initData.value = result.data
    }else {
        // console.log(result.message)
    }
}

</script>