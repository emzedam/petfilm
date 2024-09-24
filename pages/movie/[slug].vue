<template>
    <Hero />

    <MovieDetail />

    <SuggestMovies />
</template>

<script setup>
import Hero from '@/components/movie/mainsections/Hero.vue'
import MovieDetail from '@/components/movie/mainsections/MovieDetail.vue'
import SuggestMovies from '@/components/movie/mainsections/SuggestMovies.vue'

definePageMeta({
  middleware: 'slug-validation',
  layout: "movie"
})
</script>