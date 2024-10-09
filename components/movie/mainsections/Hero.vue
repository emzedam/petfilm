<template>
    <section v-if="movieDetail != null">
        <div class=" relative overflow-hidden">
            <div class="w-full">
                <div class=" relative overflow-hidden h-96">
                    <div
                        class="w-full before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-t dark:before:from-stone-900/100 before:from-slate-50/100 dark:before:via-stone-950/0 before:via-slate-50-950/60 before:to-black/0 before:z-10">
                    </div>


                    <img class="w-full object-cover -mt-32 h-screen blur-lg"
                        :src="`${movieDetail.cover}`">


                    <div class="mx-auto max-w-7xl">
                        <div class="absolute top-32 z-30">
                            <div class="text text-white space-y-5 px-4 py-4">
                                
                                <h3 class="lg:text-3xl text-xl">{{ movieDetail.title_fa }}</h3>
                                <h2 class="lg:text-xl text-sm text-stone-800 dark:text-slate-200 font-semibold">{{ movieDetail.title_en }}</h2>
                                <div v-html="movieDetail.description"></div>
                            </div>

                            <nuxt-link :to="`/archive/${movieDetail.category.slug}-${movieDetail.category.id}`" class="gap-4">
                                <button
                                    class="backdrop-brightness-200 px-4 py-2 rounded-xl dark:text-white text-stone-600 text-sm">{{ movieDetail.category.title }}</button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <div class="relative overflow-hidden">
          <div class="w-full">
            <div class="relative overflow-hidden h-96 bg-gray-300 dark:bg-slate-800 animate-pulse"></div>
    
            <div class="mx-auto max-w-7xl">
              <div class="absolute top-32 z-30">
                <div class="text space-y-5 px-4 py-4">
                  <div class="h-8 bg-gray-300 dark:bg-slate-900 rounded w-3/4 animate-pulse"></div>
                  <div class="h-4 bg-gray-300 dark:bg-slate-900 rounded w-1/2 animate-pulse"></div>
                  <div class="h-4 bg-gray-300 dark:bg-slate-900 rounded w-full animate-pulse"></div>
                </div>
    
                <div class="gap-4">
                  <button class="backdrop-brightness-200 px-4 py-2 rounded-xl bg-gray-300 dark:bg-slate-900 w-24 h-10 animate-pulse"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>
const config = useRuntimeConfig();

const appBaseUrl = config.public.appBaseUrl;
const props = defineProps({
    movieDetail: {
        required: false,
        type: [Array , Object]
    }
})
</script>