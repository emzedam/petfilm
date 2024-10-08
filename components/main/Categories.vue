<template>
    <section class="py-5">
        <div class="baner">
            <ul v-if="initData != null" class="grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 gap-2 px-2">
                <li
                    v-for="(category , index) in initData.main_categories" :key="index"
                    class="relative overflow-hidden rounded-lg duration-500 dark:bg-stone-900 bg-white dark:hover:bg-stone-700 hover:bg-yellow-300 cursor-pointer group">
                    <nuxt-link :to="`/archive/${category.slug}-${category.id}`" class="flex text-white py-5 rounded-lg px-2 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-flame">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                        </svg>
                        <h3 class="dark:group-hover:text-yellow-500 duration-500 text-stone-500 dark:text-gray-300 font-bold">{{ category.title }}</h3>
                    </nuxt-link>
                </li>
            </ul>
            <ul v-else class="grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 gap-2 px-2">
                <li
                  v-for="n in 6" :key="n"
                  class="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse h-20"
                >
                  <div class="flex py-5 px-2 justify-center items-center">
                    <div class="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div class="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 ml-3 rounded-lg"></div>
                  </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import {defineProps} from 'vue'


const props = defineProps({
    initData: {
        required: false,
        type: [Array , Object]
    }
})
</script>