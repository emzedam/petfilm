<template>
    <div>
        <Header @openMobileMenu="openMobileMenu" />
        
        <main>
            <slot />
        </main>
        <Footer />
    </div>
    <MobileAside @closeModal="isVisibleMobileMenu = false" :isVisible="isVisibleMobileMenu" />
</template>

<script setup>
import Header from '@/components/movie/Header.vue'
import MobileAside from '@/components/MobileAside.vue'
import Footer from '@/components/movie/Footer.vue'

const isVisibleMobileMenu = ref(false)

const openMobileMenu = () => {
    isVisibleMobileMenu.value = true
}
</script>