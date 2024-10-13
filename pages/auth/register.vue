<template>
    <SideCover />
    <Register />
</template>

<script setup>
import SideCover from '@/components/authorization/SideCover.vue'
import Register from '@/components/authorization/Register.vue'

definePageMeta({
    layout: "authorization",
    middleware: 'guest-pages'
})
</script>