<template>
    <div dir="ltr">
      <Vue3OtpInput
        v-model="otp"
        :num-inputs="4"
        separator=""
        @on-complete="handleOtpComplete"
        :input-classes="'bg-slate-200 dark:bg-stone-800 lg:px-4  py-4 w-16 h-16 rounded-lg text-center dark:text-white mx-1'"
        :placeholder="['-', '-', '-', '-']"
      />
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import {defineEmits} from 'vue'
    
    const emit = defineEmits(['completedOtp'])
    const otp = ref('')
    
    const handleOtpComplete = (code) => {
        const convertedCode = convertPersianToEnglishNumbers(code)
        emit("completedOtp" , convertedCode)
    }

    const convertPersianToEnglishNumbers = (persianNumber) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        return persianNumber.split('').map((char) => {
            const index = persianDigits.indexOf(char)
            return index !== -1 ? englishDigits[index] : char
        }).join('')
    }
  </script>
  
  <style scoped>
  /* اضافه کردن استایل‌های خاص برای چپ‌چین کردن فیلدها */
  .otp-container {
    direction: ltr;
  }
  </style>
  