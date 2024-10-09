
<template>
  <div class="w-full mx-auto max-w-[1280px]">
    <section>
      <!-- اصلی: نمایش اطلاعات وقتی که movieDetail بارگذاری شده -->
      <div v-if="movieDetail != null" class="grid grid-cols-1 lg:grid-cols-5 lg:gap-y-4 gap-4 mt-8">
        <div
          @click="showModal()"
          class="flex cursor-pointer items-center justify-center dark:bg-black/80 bg-slate-200 rounded-xl text-white hover:bg-yellow-500 hover:text-white transition-all duration-300 opacity-100 p-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#000"
            class="icon icon-tabler icons-tabler-filled icon-tabler-player-play fill-slate-800 dark:fill-white">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
          <span class="text-lg mr-2">تماشا</span>
        </div>
        <div class="dark:bg-black/80 bg-slate-200 rounded-xl text-white hover:bg-yellow-500 hover:text-white transition-all duration-300 opacity-100 p-5">
          <h2 class="text-2xl text-center py-3 dark:text-white text-slate-800">{{ movieDetail.created_at_formatted }}</h2>
        </div>
        <div class="dark:bg-black/80 bg-slate-200 rounded-xl text-white hover:bg-yellow-500 hover:text-white transition-all duration-300 opacity-100 p-5">
          <h2 class="text-2xl text-center py-3 dark:text-white text-slate-800">{{ movieDetail.release_year }}</h2>
        </div>
      </div>

      <!-- اسکلت لودینگ: زمانی که movieDetail هنوز بارگذاری نشده -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-5 lg:gap-y-4 gap-4 mt-8">
        <div class="flex items-center justify-center dark:bg-slate-800 bg-slate-200 rounded-xl animate-pulse p-5">
          <div class="w-12 h-12 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <span class="text-lg ml-2 bg-gray-300 dark:bg-slate-900 w-20 h-6 rounded"></span>
        </div>
        <div class="dark:bg-slate-800 bg-slate-200 rounded-xl animate-pulse p-5">
          <div class="w-full h-10 bg-gray-300 dark:bg-slate-900 rounded"></div>
        </div>
        <div class="dark:bg-slate-800 bg-slate-200 rounded-xl animate-pulse p-5">
          <div class="w-full h-10 bg-gray-300 dark:bg-slate-900 rounded"></div>
        </div>
      </div>
    </section>

    <PlayerModal :isVisible="isPlayerModalVisible" @close="closePlayerModal()">
        <div id="jwplayer"></div>
    </PlayerModal>
  </div>

</template>

<script setup>
const config = useRuntimeConfig();
import PlayerModal from '@/components/modals/PlayerModal.vue'; 

const  { $player } = useNuxtApp();

const appBaseUrl = config.public.appBaseUrl;
const isPlayerModalVisible = ref(false);
const props = defineProps({
    movieDetail: {
        required: false,
        type: [Array , Object]
    }
})

function showModal() {
    let streamType = { type: "m3u8", url: `${appBaseUrl}${props.movieDetail.hls_link}` };
    console.log(streamType)
    $player(streamType);
    isPlayerModalVisible.value = true;
}

const closePlayerModal = () => {
    isPlayerModalVisible.value = false
    $player().remove()
}
</script>