<template>
    <div class=" lg:col-span-4 col-span-12 dark:bg-stone-900  w-full h-[100vh]">
        <div class=" flex items-center justify-end p-6">
            <a @click="$router.back()" href="javascript:void(0)" >
                <button class="p-2 bg-yellow-500 rounded-lg">
                    <ArrowLeft stroke="#fff" />
                </button>
            </a>        </div>
        <div class="flex items-center justify-center lg:mt-20 md:mt-32 mt-20">
            <PetomanLogo class="!w-[180px]" />  
        </div>
        <div class="pt-5 flex items-center justify-center">
            <h3 class="text-stone-800 dark:text-white py-3">ورود به حساب کاربری</h3>
        </div>
        <div class=" flex items-center justify-center">
            <span class="text-sm dark:text-stone-300"> شماره موبایل خود را وارد کنید</span>
        </div>

        <div class="flex items-center justify-center mt-2 py-2">
            <form class="relative text-sm border border-slate-200 dark:border-stone-700 rounded-xl">
                <input 
                @input="validatePhoneNumber"
                v-model="loginData.phone_number" 
                class="w-full p-4 pl-32 dark:bg-stone-800 rounded-xl dark:text-white" type="text" placeholder="شماره موبایل">
 
                <div class="absolute top-3 left-2">
                    <Phone  />
                </div>
            </form>
        </div>
        <div class="flex items-center justify-center py-2 text-xs">
            <h4><span class="text-yellow-500 font-semibold">آیا حساب کاربری ندارید ؟ </span><nuxt-link to="/auth/register" class="dark:text-white">ثبت نام کنید</nuxt-link></h4>
        </div>

        <div class="flex items-center justify-center py-5">
            <button @click="doLogin()" type="button" class="bg-yellow-500 lg:px-6 px-4 py-4 rounded-lg hover:bg-yellow-700 font-semibold">
                <span v-if="!loading">
                    ورود به پت فیلم
                </span>
                <LoadingSpinner v-else :show="true" />
            </button>
        </div>
    </div>
</template>

<script setup>
import PetomanLogo from '~/assets/icons/svg/petomanlogo.svg'
import Phone from '~/assets/icons/svg/duelTone/device-mobile.svg'
import ArrowLeft from '~/assets/icons/svg/duelTone/arrow-left.svg'
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import {usePetfilmStore} from '@/store/petfilmStore.js'
import {useRouter} from 'vue-router'


const router = useRouter()
const loading = ref(false)
const nuxtApp = useNuxtApp()
const { $validatePhoneNumber } = nuxtApp;
const userOtpRequest = useCookie('_urequest')
const store = usePetfilmStore()

const loginData = reactive({
    phone_number: ""
})

const errors = ref(null)

const validatePhoneNumber = (event) => {
  $validatePhoneNumber(event);
}

const doLogin = async () => {
    if(loginData.phone_number == "") {
        nuxtApp.$toast.open({
            message: "لطفا شماره موبایل را وارد کنید",
            type: 'error'
        })

        return false
    }

    loading.value = true
    const loginResult = await store.doLoginUser(loginData)

    
    if(loginResult.status == 200) {
        loading.value = false
        nuxtApp.$toast.open({
            message: `کد تایید به شماره موبایل ${loginResult.data.receiver} ارسال شد`,
            type: "success"
        })

        userOtpRequest.value = JSON.stringify(loginResult.data)

        router.push("/auth/otp")
    } else {
        loading.value = false
        nuxtApp.$toast.open({
            message: loginResult.message,
            type: "error"
        })
    }
}
</script>

<style scoped>
    .cls-1 {
        fill: none;
        stroke: #ffa600;
        stroke-miterlimit: 2.61
    }

    .cls-3 {
        fill: #ffa600;
        stroke-width: 0
    }
</style>