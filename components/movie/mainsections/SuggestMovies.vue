<template>
    
    <header class="flex items-center justify-between py-6">
        <div class="flex items-center justify-start relative p-2 ">
            <h3 class="dark:text-white  rounded-lg font-bold lg:px-8 px-2">خزندگان </h3>
        </div>

        <div class="flex items-center justify-end lg:px-8 px-2">
            <button class="bg-yellow-500 duration-500 rounded-lg p-2 flex hover:bg-yellow-300">
                <span class="text-sm px-2">مشاهده همه </span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="#57534e" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg></span>
            </button>
        </div>


    </header>

    <div class="w-full  max-w-[1280px] mx-auto py-6">

        <swiper
        :slides-per-view="5"
        :space-between="10"
        :allowSlideNext="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :breakpoints="breakpoints"
        >
            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>

            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>

            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>
            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>
            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>
            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>
            <swiper-slide>
                <article class="relative overflow-hidden group ">
                    <div class="relative overflow-hidden">
                        <div class="w-full">
                            <img class="rounded-xl w-full object-cover" src="@/assets/images/The-Garfield-Movie-2024-207x290.jpg" alt="">
                        </div>
        
        
                        <div class="absolute  w-full bg-gradient-to-t from-stone-900/100 via-stone-950/70 to-stone-950/0  rounded-b-lg shadow-2xl p-3 bottom-0">
                            <h3 class="text-white">یک میلیون دقیقه</h3>
                            <p class="text-stone-300 py-1">A Million Minutes</p>
                            <button class="bg-yellow-500 flex p-2 rounded-lg text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg> تماشا</button>
                        </div>
                        <div class="absolute top-3 right-2 z-50 backdrop-blur-md p-2 rounded-lg justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
        
                        </div>
        
                        <div class="absolute top-3 left-2 z-50 backdrop-blur-sm p-2 rounded-lg justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
        
                        </div>
                    </div>
                </article>
            </swiper-slide>


            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        
        </swiper>
      
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const breakpoints = {
  320: {
    slidesPerView: 2, // در اندازه 320px و بالاتر، دو اسلاید نمایش داده می‌شود
  },
  640: {
    slidesPerView: 3, // در اندازه 640px و بالاتر، سه اسلاید نمایش داده می‌شود
  },
  1024: {
    slidesPerView: 4, // در اندازه 1024px و بالاتر، چهار اسلاید نمایش داده می‌شود
  },
  1500: {
    slidesPerView: 5, // در اندازه 1024px و بالاتر، چهار اسلاید نمایش داده می‌شود
  },
  2000: {
    slidesPerView: 7, // در اندازه 1024px و بالاتر، چهار اسلاید نمایش داده می‌شود
  },
};
</script>