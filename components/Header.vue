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
                <!-- <div @click="changeThemeMode()" class="flex items-center justify-start p-2 hover:bg-gray-200 cursor-pointer rounded-xl transition-all ease-in">
                    <SunIcon v-if="theme == 'dark'" />
                    <MoonIcon v-if="theme == 'light'"  />
                </div> -->
                <div v-if="!authUser">
                    <button class="p-2 mx-3 bg-yellow-500 rounded-lg">
                        <nuxt-link class="flex" to="/auth/login">
                          <UserIcon/>  ورود/ عضویت </nuxt-link> </button>
                </div>
                <div v-else>
                    <button  @click="showConfirmModal = true" class="p-2 mx-3 bg-yellow-500 rounded-lg">
                        <a class="flex" href="javascript:void(0)">
                          <UserIcon/>{{ authUser.first_name }} {{ authUser.last_name }}</a> </button>
                </div>
            </div>


        </div>


        <ConfirmModal
            :isVisible="showConfirmModal"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
        <template #title>
            خروج از حساب
        </template>
        <template #message>
            آیا از خروج حساب کاربری خود مطمعن هستید؟
        </template>
        </ConfirmModal>
    </header>
</template>

<script setup> 
import ConfirmModal from '@/components/modals/ConfirmModal.vue'
import {useRoute , useRouter} from 'vue-router'
import SunIcon from '~/assets/icons/svg/duelTone/sun.svg'
import MoonIcon from '~/assets/icons/svg/duelTone/moon.svg'
import UserIcon from '~/assets/icons/svg/duelTone/user.svg'
import {usePetfilmStore} from '@/store/petfilmStore.js'
import {storeToRefs} from 'pinia'

const nuxtApp = useNuxtApp()
const store = usePetfilmStore()
const {theme , authUser} = storeToRefs(store)
const router = useRouter()
const search_query_param = ref(null)
const showConfirmModal = ref(false)

const do_search_content = () => {
    if(search_query_param.value != null) {
        router.push(`/search?query_string=${search_query_param.value}`)
    }
}

const changeThemeMode = () => {
    store.change_theme_mode()
}

const handleConfirm = async () => {
    const refresh = useCookie("refresh")
    const token = useCookie("token")
    if(refresh.value && token.value) {
        const payload = {
            token: token.value,
            refresh: refresh.value
        }
        const logoutResult = await store.logout_user(payload)
        if(logoutResult.status == 205) {
            showConfirmModal.value = false
            nuxtApp.$toast.open({
                message: logoutResult.data.message,
                type: "success"
            })
            refresh.value = null
            token.value = null
        }else {
            showConfirmModal.value = false
            nuxtApp.$toast.open({
                message: logoutResult.message,
                type: "error"
            })
        }
    }else {
        window.location.reload()
    }
}

const handleCancel = () => {
  showConfirmModal.value = false
}

</script>