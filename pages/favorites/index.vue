<template>
    <div class="overflow-y-auto w-full mx-auto lg:px-6 px-3">
        <Content :favorites="authUser.videos" />
    </div>
</template>

<script setup>
import Content from '@/components/favorite/Content.vue'
import {usePetfilmStore} from '@/store/petfilmStore.js'
import { storeToRefs } from 'pinia';

definePageMeta({
  middleware: 'auth-page'
})

const store = usePetfilmStore()
const {authUser} = storeToRefs(store)


</script>