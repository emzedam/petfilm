<template>
    <main>
        <section class="mt-5"> 
            <div class="px-3">
                <div class="titel py-3 border-b border-gray-700">
                    <div class="flex  px-6">
                       <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffc000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /></svg>
                        <h2 class="dark:text-white text-2xl px-2">علاقه مندی های شما</h2>
                    </div>
                </div>
                <div class="grid lg:grid-cols-6 grid-cols-2 gap-4 px-4 mt-7">
                    <div class="relative overflow-hidden rounded-lg" v-if="favorites.length != 0" v-for="(video , index) in favorites" :key="video.id">
                        <div class="w-full h-[300px] lg:h-[420px] rounded-xl">
                            <nuxt-link :to="`/movie/${video.slug}-${video.id}`">
                                <img class="rounded-xl w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" :src="`${appBaseUrl}${video.cover}`" :alt="video.title_fa">
                            </nuxt-link>
                        </div>

                        <div class="absolute w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white"> {{ video.title_fa }} </h3>
                            <p class="text-stone-300 py-1">{{ video.title_en }}</p>
                            <nuxt-link :to="`/movie/${video.slug}-${video.id}`">
                                <button class="bg-yellow-500 flex p-2 rounded-lg text-white">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                            </nuxt-link>
                        </div>

                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                            <PlusIcon />
                        </div>

                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <StarIcon />
                        </div>
                    </div>
                    <div v-else class="lg:col-span-6 col-span-2 text-center dark:text-white py-[250px] font-bold">
                       ویدیویی به عنوان علاقه مندی اضافه نشده
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import StarIcon from '@/assets/icons/svg/duelTone/star.svg'
import PlusIcon from '@/assets/icons/svg/duelTone/plus.svg'

const config = useRuntimeConfig();
const appBaseUrl = config.public.appBaseUrl;
const props = defineProps({
    favorites: {
        required: false,
        type: [Array , Object]
    }
})
</script>