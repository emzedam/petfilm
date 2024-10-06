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
            </div>
        </div>
            <div class="flex items-center justify-center gap-3 flex-col">


               <OtpInput @completedOtp="(code) => codeCompleted(code)" />
                <div class="text-white">
                    <p v-if="showResendButton == false">ارسال مجدد کد <span class="text-yellow-500 font-bold" >{{ timeLeft }}</span> ثانیه دیگر</p>
                    <button type="button" v-if="showResendButton == true" class="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-xl text-sm">
                         ارسال مجدد کد تایید
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

const loading = ref(false)
const timeLeft = ref(120)
const showResendButton = ref(false)
let countdownInterval

const codeCompleted = (code) => {
    console.log(code)
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