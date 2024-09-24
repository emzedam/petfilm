<template>
    <SideCover />
    <Login />
</template>

<script setup>
import SideCover from '@/components/authorization/SideCover.vue'
import Login from '@/components/authorization/Login.vue'

definePageMeta({
    layout: "authorization"
})
</script>