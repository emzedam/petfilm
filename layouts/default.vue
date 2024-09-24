<template>
    <div class="w-full">
        <div class="grid grid-cols-12">
            <div class="lg:col-span-3 col-span-12 hidden lg:block">
                <Aside />
            </div>
            <div class="lg:col-span-9 col-span-12">
                <Header />

                <main>
                    <slot />
                </main>

                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>