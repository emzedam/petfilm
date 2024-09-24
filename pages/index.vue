<template>
    <div class="overflow-y-auto w-full mx-auto lg:px-6 px-3">

        <FullCover />

        <Categories />

        <Content />

        
    </div>
</template>

<script setup>
import FullCover from '@/components/main/FullCover.vue'
import Categories from '@/components/main/Categories.vue'
import Content from '@/components/main/Content.vue'

</script>