<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <!-- Title Slot -->
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          <slot name="title">Are you sure?</slot>
        </h3>
  
        <!-- Message Slot -->
        <div class="mb-6">
          <slot name="message">Do you want to proceed with this action?</slot>
        </div>
  
        <!-- Actions: Confirm and Cancel buttons -->
        <div class="flex justify-end space-x-4">
          <button
            @click="cancel"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            @click="confirm"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
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
  