<template>
    <div class=" lg:col-span-4 col-span-12 dark:bg-stone-900  w-full h-full">
        <div class=" flex items-center justify-end p-6">
            <a @click="$router.back()" href="javascript:void(0)" >
                <button class="p-2 bg-yellow-500 rounded-lg">
                    <ArrowLeft stroke="#fff" />
                </button>
            </a>
        </div>
        <div class="flex items-center justify-center lg:mt-20 md:mt-32 mt-20">
             <PetomanLogo class="!w-[180px]" />   
        </div>
        <div class="pt-5 flex items-center justify-center">
            <h3 class="text-stone-800 dark:text-white py-3">ایجاد حساب کاربری</h3>
        </div>
        <div class=" flex items-center justify-center">
            <span class="text-sm dark:text-stone-300"> 
                اطلاعات خواسته شده  را وارد کنید
            </span>
        </div>

        <div class="flex items-center justify-center mt-2 py-2">
            <form class="relative text-sm dark:border-stone-700 rounded-xl p-3">
                <div class="w-full relative">
                    <input @input="validateName" v-model="registerData.first_name" class="w-full p-4 pl-32 dark:bg-stone-800 rounded-xl dark:text-white" type="text" placeholder=" نام ">
 
                    <div class="absolute top-3 left-2">
                        <UserIcon stroke="#999" fill="#999"  />
                    </div>
                    <!-- <p>test</p> -->
                </div>
                <div class="mt-3 w-full relative">
                    <input @input="validateFamily" v-model="registerData.last_name"  class="w-full p-4 pl-32 dark:bg-stone-800 rounded-xl dark:text-white" type="text" placeholder=" نام خانوادگی ">
 
                    <div class="absolute top-3 left-2">
                        <UserIcon stroke="#999" fill="#999"  />
                    </div>
                </div>
                <div class="mt-3 w-full relative">
                    <input
                    @input="validatePhoneNumber"
                    v-model="registerData.phone_number" 
                    class="w-full p-4 dark:bg-stone-800 rounded-xl dark:text-white" dir="ltr" type="text" placeholder=" شماره موبایل">
 
                    <div class="absolute top-3 right-2">
                        <Phone  />
                    </div>
                </div>

            </form>
        </div>
        <div class="flex items-center justify-center py-2 text-xs">
            <h4><span class="text-yellow-500 font-semibold">آیا حساب کاربری دارید ؟ </span><nuxt-link to="/auth/login" class="dark:text-white"> وارد شوید </nuxt-link></h4>
        </div>

        <div class="flex items-center justify-center py-5">
            <button @click="doRegister()" type="button" class="bg-yellow-500 lg:px-6 px-4 py-4 rounded-lg hover:bg-yellow-700 font-semibold">
                <span v-if="!loading">
                    ثبت نام در پت فیلم
                </span>
                <LoadingSpinner v-else :show="true" />
            </button>
        </div>
    </div>
</template>

<script setup>

import PetomanLogo from '~/assets/icons/svg/petomanlogo.svg'
import Phone from '~/assets/icons/svg/duelTone/device-mobile.svg'
import UserIcon from '~/assets/icons/svg/duelTone/user.svg'
import ArrowLeft from '~/assets/icons/svg/duelTone/arrow-left.svg'
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import {usePetfilmStore} from '@/store/petfilmStore.js'
import {useRouter} from 'vue-router'

const router = useRouter()
const nuxtApp = useNuxtApp()
const { $validatePhoneNumber , $validateString } = nuxtApp;
const store = usePetfilmStore()

const loading = ref(false)

const registerData = reactive({
    first_name: "",
    last_name: "",
    phone_number: ""
})

const validatePhoneNumber = (event) => {
  $validatePhoneNumber(event);
}
const validateName = (event) => {
  $validateString(event);
}
const validateFamily = (event) => {
  $validateString(event);
}

const doRegister = async () => {
    if(registerData.first_name == "" || registerData.last_name == "" || registerData.phone_number == "") {
        nuxtApp.$toast.open({
            message: 'لطفا همه اطلاعات خواسته شده را دقیق وارد کنید',
            type: 'error'
        })

        return false
    }

    loading.value = true
    const registerResult = await store.doRegisterUser(registerData)

    loading.value = false

    if(registerResult.status == 200) {
        nuxtApp.$toast.open({
            message: registerResult.data.message,
            type: "success"
        })

        router.push("/auth/login")
    }else {
        nuxtApp.$toast.open({
            message: registerResult.message,
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