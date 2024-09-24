<template>
    <header>


        <div class="flex items-center justify-between lg:px-6 px-4 py-3 w-full">




            <div class="jostojo items-center justify-center lg:px-2 hidden lg:flex">
                <form @submit.prevent="do_search_content">
                    <div class=" relative">
                        <input
                            v-model="search_query_param"
                            class="dark:text-white text-start relative border p-3 border-stone-200 dark:border-stone-800 rounded-xl pl-32 dark:bg-stone-950"
                            type="text" placeholder="شروع به جستجو کنید">
                        <div class="absolute top-3 left-1 px-2">
                            <a href="./jostojo.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57534e"
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

            <div class="jostojo flex items-center justify-center lg:px-2 lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified cursor-pointer">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l12 0" />
                </svg>



            </div>




            <div class="profail flex items-center justify-start lg:px-2">

                <div class="svg flex items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#57534e" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                        <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                    </svg>
                </div>

                <div class="svg flex items-center justify-start p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#57534e" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 9h8" />
                        <path d="M8 13h6" />
                        <path
                            d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    </svg>
                </div>
                <div>
                    <button class="p-2 mx-3 bg-yellow-500 rounded-lg">
                        <nuxt-link class="flex" to="/auth/login">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#000"  class="icon icon-tabler icons-tabler-filled icon-tabler-user ml-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>ورود/ عضویت </nuxt-link> </button>
                </div>
            </div>


        </div>

    </header>
</template>

<script setup> 
import {useRoute , useRouter} from 'vue-router'

const router = useRouter()
const search_query_param = ref(null)

const do_search_content = () => {
    if(search_query_param.value != null) {
        router.push(`/search?query_string=${search_query_param.value}`)
    }
}
</script>