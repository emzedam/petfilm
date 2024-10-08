<template>
    <div v-if="isVisible"  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 !z-[2000]">
      <div  class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <!-- Title Slot -->
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          <slot name="title">آیا مطمعنید؟</slot>
        </h3>
  
        <!-- Message Slot -->
        <div class="mb-6 dark:text-white">
          <slot name="message">آیا از انجام این اقدام مطمعن هستید؟</slot>
        </div>
  
        <!-- Actions: Confirm and Cancel buttons -->
        <div class="flex justify-end gap-2">
          <button
            @click="cancel"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            لغو
          </button>
          <button
            @click="confirm"
            class="px-4 py-2 bg-blue-600 dark:bg-yellow-500 dark:text-black text-white rounded hover:bg-blue-700 dark:hover:bg-yellow-700"
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, defineProps } from 'vue'
  
  const emit = defineEmits(['confirm', 'cancel'])
  const props = defineProps({
    isVisible: Boolean
  })
  
  const cancel = () => {
    emit('cancel')
  }
  
  const confirm = () => {
    emit('confirm')
  }
  </script>
  