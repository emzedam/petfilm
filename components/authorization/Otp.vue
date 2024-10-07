<template>
    <div class="lg:col-span-4 col-span-12 dark:bg-stone-900 p-5 w-full">
        <div class=" flex items-center justify-end p-2">
            <a @click="$router.back()" href="javascript:void(0)" >
                <button class="p-2 bg-yellow-500 rounded-lg">
                    <ArrowLeft stroke="#fff" />
                </button>
            </a>
        </div>
        <div class="flex items-center justify-center lg:mt-20 md:mt-32 mt-20">
            <PetomanLogo class="!w-[180px]" />   
       </div>

        <div class="flex items-center justify-center  my-5">
            <div>
                <h3 class="dark:text-white">لطفا کد تایید دریافت شده را وارد نمایید</h3>
                <nuxt-link to="/auth/login" class="dark:text-yellow-500 cursor-pointer text-sm underline text-center block">تغییر شماره همراه</nuxt-link>
            </div>
        </div>
            <div class="flex items-center justify-center gap-3 flex-col">
               <OtpInput @completedOtp="(code) => codeCompleted(code)" />
                <div class="text-white">
                    <p v-if="showResendButton == false">ارسال مجدد کد <span class="text-yellow-500 font-bold" >{{ timeLeft }}</span> ثانیه دیگر</p>
                    <button @click="doResendOtp" v-else type="button"  class="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-xl text-sm">
                         <span v-if="resendLoading == false">ارسال مجدد کد تایید</span>
                         <LoadingSpinner v-else :show="true" />
                    </button>
                </div>
            </div>


            <div class="flex items-center justify-center mt-10">
                <button @click="doVerify()" type="button" class="bg-yellow-500 lg:px-6 px-4 py-4 rounded-lg hover:bg-yellow-700 font-semibold">
                    <span v-if="!loading">
                       تایید حساب
                    </span>
                    <LoadingSpinner v-else :show="true" />
                </button>
            </div>



    </div>
</template>

<script setup>
import PetomanLogo from '~/assets/icons/svg/petomanlogo.svg'
import ArrowLeft from '~/assets/icons/svg/duelTone/arrow-left.svg'
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import OtpInput from './OtpInput.vue'
import {usePetfilmStore} from '@/store/petfilmStore.js'
import {useRouter} from 'vue-router'

const router = useRouter()
const nuxtApp = useNuxtApp()
const store = usePetfilmStore()
const loading = ref(false)
const timeLeft = ref(120)
const showResendButton = ref(false)
const resendLoading = ref(false)
let countdownInterval
const otp_code = ref(null)
const refresh = useCookie("refresh")
const token = useCookie("token")

const codeCompleted = (code) => {
    otp_code.value = code
    doVerify(otp_code.value)
}

const doVerify = async (code=null) => {
    if(code == null) {
        code = otp_code.value
    }

    if(otp_code.value != null) {
        loading.value = true
        const loginRequestInfo = useCookie("_urequest")
    
        const verifyData = {
            request_id: loginRequestInfo.value.request_id,
            password: code,
            receiver: loginRequestInfo.value.receiver
        }
    
        const result = await store.verifyOtpRequest(verifyData)
        if(result.status == 200) {
            loading.value = false

            refresh.value = result.data.refresh
            token.value = result.data.token

            router.push("/")
        }else {
            loading.value = false
            nuxtApp.$toast.open({
                message: result.message,
                type: "error"
            })
        }
    }else {
        nuxtApp.$toast.open({
            message: "لطفا کد تایید را کامل وارد کنید",
            type: "error"
        })
    }

}


const startCountdown = () => {
  countdownInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(countdownInterval)
      showResendButton.value = true
    }
  }, 1000)
}

const doResendOtp = async () => {
    const loginRequestInfo = useCookie("_urequest")
    if(loginRequestInfo.value.receiver) {
        resendLoading.value = true
        const resendResult = await store.doLoginUser({
            phone_number: loginRequestInfo.value.receiver
        })

        if(resendResult.status == 200) {
            resendLoading.value = false
            timeLeft.value = 120
            showResendButton.value = false
            startCountdown()

            loginRequestInfo.value = JSON.stringify(resendResult.data)

        } else {
            resendLoading.value = false
            nuxtApp.$toast.open({
                message: resendResult.message,
                type: "error"
            })
        }
    }else {
        nuxtApp.$toast.open({
            message: "شماره موبایل وارد نشده . ابتدا شماره موبایل وارد کنید",
            type: 'error'
        })

        router.push("/auth/login")
    }
}   

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  clearInterval(countdownInterval) // پاک کردن شمارشگر هنگام خروج از کامپوننت
})

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