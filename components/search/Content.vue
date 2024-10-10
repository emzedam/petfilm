<template>
    <main>
        <section>
            
            <div class="jostojo items-center justify-center px-2 w-full mt-[40px] block lg:hidden">
                <form @submit.prevent="forward_to_searchpage">
                    <div class="relative w-full">
                        <input
                            v-model="search_query_param"
                            class="dark:text-white w-full text-start relative border p-2 border-stone-200 dark:border-stone-800 rounded-xl dark:bg-stone-950"
                            type="text" placeholder="شروع به جستجو کنید">
                        <div class="absolute top-3 left-1 px-2">
                            <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57534e"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-zoom">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg></a>
                        </div>
                    </div>

                </form>
            </div>

            <article>
                <div class="absolute top-[150px] lg:top-[120px] lg:px-6 px-2 dark:text-white lg:text-xl font-semibold py-3">
                    <h3 class="text-yellow-500">عنوانی که شما جستجو کردید : {{ search_query_param }}</h3>
                </div>
            </article>


        </section>
        <section class="mt-[70px] py-5 ">
            <!-- <header class="flex items-center justify-between py-3 overflow-hidden mt-48 "></header> -->
            <div v-if="searchResult != null" class="grid lg:grid-cols-6 grid-cols-2 gap-4 px-4 mt-7">
                <div class="relative overflow-hidden rounded-lg" v-if="searchResult.length != 0" v-for="(video , index) in searchResult" :key="video.id">
                    <div class="w-full h-[300px] lg:h-[420px] rounded-xl">
                        <nuxt-link :to="`/movie/${video.slug}-${video.id}`" class="h-full">
                            <img class="rounded-xl w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" :src="`${video.cover}`" :alt="video.title_fa">
                        </nuxt-link>
                    </div>


                    <div class="absolute w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                        <h3 class="text-white"> {{ video.title_fa }} </h3>
                        <p class="text-stone-300 py-1">{{ video.title_en }}</p>
                        <button class="bg-yellow-500 flex p-2 rounded-lg text-white">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                    </div>
                    <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <PlusIcon />
                    </div>

                    <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                        <StarIcon />
                    </div>

                </div>
                <div v-else class="lg:col-span-6 col-span-2 text-center dark:text-white py-[250px] font-bold">
                    ویدیویی متناسب با متن جستجوی شما یافت نشد
                </div>
            </div>
            <div class="grid lg:grid-cols-6 grid-cols-2 gap-4 px-4 mt-7" v-else>
                <div class="relative overflow-hidden" v-for="item in 12" :key="item">
                    <div class="w-full animate-pulse">
                        <!-- Placeholder for Image -->
                        <div class="bg-gray-300 dark:bg-gray-500 rounded-xl w-full h-[300px] lg:h-[420px]"></div>
                    </div>
                
                    <div class="absolute w-full rounded-b-lg shadow-2xl p-3 bottom-0 animate-pulse">
                        <!-- Placeholder for Title -->
                        <div class="bg-gray-400 dark:bg-gray-600 h-6 w-3/4 rounded mb-2"></div>
                        <!-- Placeholder for Subtitle -->
                        <div class="bg-gray-400 dark:bg-gray-600 h-4 w-1/2 rounded"></div>
                    </div>
                
                    <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg animate-pulse">
                        <!-- Placeholder for PlusIcon -->
                        <div class="bg-gray-400 dark:bg-gray-600 h-6 w-6 rounded-full"></div>
                    </div>
                
                    <div class="absolute top-3 left-2 z-50 backdrop-blur-md p-2 rounded-lg animate-pulse">
                        <!-- Placeholder for StarIcon -->
                        <div class="bg-gray-400 dark:bg-gray-600 h-6 w-6 rounded-full"></div>
                    </div>
                </div>                    
            </div>
        </section>

    </main>
</template>

<script setup> 
import {useRoute , useRouter} from 'vue-router'
import {watch , onMounted} from 'vue'
import {usePetfilmStore} from '@/store/petfilmStore.js'
import StarIcon from '@/assets/icons/svg/duelTone/star.svg'
import PlusIcon from '@/assets/icons/svg/duelTone/plus.svg'

const route = useRoute()
const router = useRouter()
const search_query_param = ref(null)
const store = usePetfilmStore()
const searchResult = ref(null)
// const 

const forward_to_searchpage = () => {
    if(search_query_param.value != null) {
        router.push(`/search?query_string=${search_query_param.value}`)
    }
}



onMounted(() => {
   
        search_query_param.value = route.query.query_string
        do_search_action(route.query.query_string)
    
})

watch(() => route.query.query_string , (newVal , oldVal) => {
    search_query_param.value = newVal
    searchResult.value = null
    do_search_action(newVal)
})

const do_search_action = async (qstring) => {
    const result = await store.do_search_movie({
        qstring: qstring
    })

    if(result.status == 200) {
        searchResult.value = result.data
    }
}


</script>