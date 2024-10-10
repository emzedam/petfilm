<template>
    <div class="fixed w-[100vw] z-[3000] h-[100vh] top-0 left-0 transition-all " :class="isVisible ? 'opacity-1 visible' : 'opacity-0 invisible'">
        <div @click="closeModal" class="absolute cursor-pointer top-2 left-2 w-12 h-12 bg-yellow-500 text-black font-bold z-[2000] rounded-lg flex items-center justify-center">
            <CloseIcon />
        </div>
        <div @click="closeModal" class="backdrop-blur-sm bg-stone-950/30 rounded-lg w-full h-screen z-40 top-0 right-0 fixed transition-all ease-out"></div>
        <button><i class="fa-regular fa-circle-xmark absolute left-5 top-4 z-50 text-xl text-white"></i></button>
        <div class="bg-white dark:bg-stone-900 p-10 w-[85%] h-screen fixed  top-0 z-50 block lg:hidden transition-all ease-in" :class="isVisible ? 'right-0' : 'right-[-1000px]'">
            <ul class="flex flex-col space-y-3">
                <nuxt-link @click="closeModal" to="/">
                    <li class="dark:text-white"><i class="fa-solid fa-house ml-2"></i>خانه</li>
                </nuxt-link>
                <nuxt-link @click="closeModal" to="/aboutus">
                    <li class="dark:text-white"><i class="fa-solid fa-house ml-2"></i>درباره ما</li>
                </nuxt-link>
                <nuxt-link @click="closeModal" to="/contactus">
                    <li class="dark:text-white"><i class="fa-solid fa-house ml-2"></i>تماس با ما</li>
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script setup>
import CloseIcon from '@/assets/icons/svg/duelTone/close.svg'

const emit  = defineEmits(['closeModal'])
const props = defineProps({
    isVisible: {
        required: true,
        type: Boolean
    }
})

const closeModal = () => {
    emit("closeModal")
}
</script>