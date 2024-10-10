<template>
    <Hero :movieDetail="movieDetail" />

    <MovieDetail :movieDetail="movieDetail" />

    <SuggestMovies :movieDetail="movieDetail" />
</template>

<script setup>
import Hero from '@/components/movie/mainsections/Hero.vue'
import MovieDetail from '@/components/movie/mainsections/MovieDetail.vue'
import SuggestMovies from '@/components/movie/mainsections/SuggestMovies.vue'

import {usePetfilmStore} from '@/store/petfilmStore.js'
import {useRoute} from 'vue-router'

definePageMeta({
  middleware: 'slug-validation',
  layout: "movie"
})

const route = useRoute()
const movieDetail = ref(null) 
const store = usePetfilmStore()

onMounted(async () => {
  await getMovieDetail()
})


const getMovieDetail = async () => {
  const splitSlug = route.params.slug.split("-")
  const movieId = splitSlug[splitSlug.length-1]

  const result = await store.get_movie_detail({
    id: movieId
  })

  if(result.status == 200) {
    movieDetail.value = result.data
  }
}

</script>