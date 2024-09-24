<template>
    <SideCover />
    <Otp />
</template>

<script setup>
import SideCover from '@/components/authorization/SideCover.vue'
import Otp from '@/components/authorization/Otp.vue'

definePageMeta({
    layout: "authorization"
})
</script>