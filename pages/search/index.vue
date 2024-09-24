<template>
    <SearchHeader />
    <SearchContent />
</template>

<script setup>
import SearchHeader from '@/components/search/Header.vue'
import SearchContent from '@/components/search/Content.vue'

definePageMeta({
    layout: "search"
})
</script>