<template>
    <div>
        <Header />
        <MobileAside />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/movie/Header.vue'
import MobileAside from '@/components/movie/MobileAside.vue'
import Footer from '@/components/movie/Footer.vue'
</script>