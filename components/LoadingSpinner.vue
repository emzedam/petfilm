<template>
    <div v-if="show" class="loading-spinner"></div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  });
  </script>
  
  <style scoped>
  .loading-spinner {
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #212121;
    width: 16px;
    height: 16px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  