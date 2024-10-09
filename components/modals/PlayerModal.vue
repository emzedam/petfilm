<template>
    <div v-show="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content relative bg-white dark:bg-slate-900" @animationend="animationEnd">
            <div @click="closeModal" class="absolute cursor-pointer top-5 left-5 w-12 h-12 bg-yellow-500/30 text-yellow-500 font-bold z-[2000] rounded-lg flex items-center justify-center">
                <CloseIcon />
            </div>
            <slot></slot>
        </div>
    </div>
  </template>
  
  <script setup>
  import CloseIcon from '@/assets/icons/svg/duelTone/close.svg'
  const props = defineProps({
    isVisible: Boolean
  });
  
  const emit = defineEmits(['close']);
  
  function closeModal() {
    emit('close');
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgb(0 0 0 / 71%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    width: 100vw;
    height: 100vh;
    border-radius: 10px;
    transform: scale(0);
    animation: scaleIn 0.3s forwards;
  }
  
  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  </style>
  