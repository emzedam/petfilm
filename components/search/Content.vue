<template>
    <main>
        <section class="">
            <article>

                <div class="flex items-center justify-center mt-2 py-3" >
                    <form @submit.prevent="forward_to_searchpage" class="absolute top-40 text-sm rounded-xl w-full lg:px-16 px-2">
                             <input v-model="search_query_param" class="w-full p-6 dark:bg-stone-700 bg-slate-300/30 rounded-xl px-16 dark:text-white" type="search" placeholder="جستجو فیلم و سریال و بازیگر و ژانر و...">

                            <div class="absolute top-3 lg:right-20 right-2 cursor-pointer p-2 dark:hover:bg-black/50 hover:bg-black/50   rounded-full">

                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dark:stroke-white stroke-black icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                            </div>
                            <div class="absolute top-3 lg:left-20 left-2 cursor-pointer p-2 hover:bg-black/50 rounded-full">

                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class=" dark:fill-white fill-black icon icon-tabler icons-tabler-filled icon-tabler-microphone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1 -6.999 7.938l-.001 2.062h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-2.062a8 8 0 0 1 -7 -7.938a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1 -1m-7 -8a4 4 0 0 1 4 4v5a4 4 0 1 1 -8 0v-5a4 4 0 0 1 4 -4" /></svg>
                            </div>

                    </form>


                </div>
            </article>

            <article>
                <div class="absolute top-60 lg:px-20 px-2 dark:text-white lg:text-xl font-semibold py-3">
                    <h3 class="text-yellow-500">عنوان فیلم، سریال مورد نظر خود را جستجو کنید !</h3>
                </div>
            </article>


        </section>
        <section>
            <header class="flex items-center justify-between py-3 overflow-hidden mt-48 "></header>
            <div class="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-2 gap-4 py-5 lg:px-16 px-2">
                <div class="relative overflow-hidden">
                    <div class="w-full">
                        <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                    </div>


                    <div
                        class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                        <h3 class="text-white">یک میلیون دقیقه</h3>
                        <p class="text-stone-300 py-1">A Million Minutes</p>
                        <a href="./tamasha.html"><button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>تماشا</button></a>
                    </div>
                    <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>

                    </div>

                    <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg>

                    </div>

                </div>
            </div>
        </section>

    </main>
</template>

<script setup> 
import {useRoute , useRouter} from 'vue-router'
import {watch , onMounted} from 'vue'

const route = useRoute()
const router = useRouter()
const search_query_param = ref(null)

const forward_to_searchpage = () => {
    if(search_query_param.value != null) {
        router.push(`/search?query_string=${search_query_param.value}`)
    }
}

// search for first time
onMounted(() => {
    // do action 
    if(route.query.query_string) {
        do_search_action(route.query.query_string)
    }else {
        router.push("/")
    }
})

watch(() => route.query.query_string , (newVal , oldVal) => {
    // do action 
    do_search_action(newVal)
})

const do_search_action = (qstring) => {
    console.log(qstring)
}


</script>