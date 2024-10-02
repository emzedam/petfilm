<template>
    <section class="slider">
        <div v-if="initData != null">
            <article class="relative overflow-hidden h-96 p-2">
                <img class="w-full rounded-lg object-cover h-full"
                    :src="`${appBaseUrl}${initData.cover_video[0].cover}`" :alt="initData.cover_video[0].title_fa">

                <div class="absolute lg:top-6 lg:right-9 top-6  text-right space-y-5 px-5">
                    <div class="bg-yellow-500 p-1 rounded-lg flex items-center">
                        <span class="text-xs">7.1</span> <span class="px-2 text-xs">IMDB</span>
                    </div>
                </div>
                <div class="absolute lg:bottom-6 lg:right-9 bottom-36 px-5">
                    <button
                        class="bg-yellow-500 duration-500 px-6 py-2 rounded-lg hover:bg-yellow-300">مشاهده</button>
                </div>

                <div class="absolute lg:right-16 top-16 lg:top-32 right-9 text-right space-y-3">

                    <div>
                        <h3 class="text-white text-lg "><span
                                class="font-bold">{{ initData.cover_video[0].title_en }}</span></h3>
                    </div>
                    <div>

                        <h3 class="text-white text-2xl font-bold">{{ initData.cover_video[0].title_fa }}</h3>
                    </div>
                    <div class="flex items-center justify-start">
                        <div class="flex items-center justify-center gap-3">
                            <p class="text-white ">persian</p>
                            <IrnIcon />
                        </div>
                    </div>

                </div>

            </article>

        </div>
        <div v-else class="relative overflow-hidden h-96 p-2 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            <div class="w-full rounded-lg object-cover h-full  bg-gray-300 dark:bg-gray-700"></div>
      
            <div class="absolute lg:top-6 lg:right-9 top-6 text-right space-y-5 px-5">
              <div class="bg-gray-400 dark:bg-gray-800 p-1 rounded-lg w-16 h-6"></div>
            </div>
      
            <div class="absolute lg:bottom-6 lg:right-9 bottom-36 px-5">
              <div class="bg-gray-400 dark:bg-gray-800 rounded-lg w-24 h-10"></div>
            </div>
      
            <div class="absolute lg:right-16 top-16 lg:top-32 right-9 text-right space-y-3">
              <div class="bg-gray-400 dark:bg-gray-800 rounded-lg w-1/2 h-6"></div>
              <div class="bg-gray-400 dark:bg-gray-800 rounded-lg w-2/3 h-8"></div>
              <div class="flex items-center justify-start mt-3">
                <div class="bg-gray-400 dark:bg-gray-800 rounded-full w-8 h-4"></div>
                <div class="bg-gray-400 dark:bg-gray-800 rounded-lg w-16 h-4 ml-3"></div>
              </div>
            </div>
          </div>
    </section>
</template>

<script setup>
import {defineProps} from 'vue'
import IranIcon from '~/assets/icons/svg/flags/ir.svg'
const config = useRuntimeConfig()

const appBaseUrl = config.public.appBaseUrl

const props = defineProps({
    initData: {
        required: true,
        type: [Array , Object]
    }
})

// onMounted(() => {
//     console.log(props.coverVideo)
// })
</script>