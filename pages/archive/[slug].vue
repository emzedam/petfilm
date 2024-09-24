<template>
    <div class="overflow-y-auto w-full mx-auto lg:px-6 px-3">
        <Content />
    </div>
</template>

<script setup>
import Content from '@/components/archive/Content.vue'

definePageMeta({
  middleware: 'slug-validation'
})
</script>