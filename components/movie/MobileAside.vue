<template>
    <div class="relative hidden">
        <div class="backdrop-blur-sm bg-blue-950/30 rounded-lg w-full h-screen z-40 top-0 right-0 absolute"></div>
        <button><i class="fa-regular fa-circle-xmark absolute left-5 top-4 z-50 text-xl text-white"></i></button>
        <div class="bg-white p-10 w-[85%] h-screen fixed right-0 top-0 z-50 block lg:hidden">
            <ul class="flex flex-col space-y-3">
                <li><i class="fa-solid fa-house ml-2"></i>خانه</li>
                <li><i class="fa-solid fa-film ml-2"></i>فیلم</li>
                <li><i class="fa-solid fa-phone ml-2"></i>تماس با ما</li>
                <li><i class="fa-solid fa-info ml-2"></i>درباره ما</li>
            </ul>
        </div>
    </div>
</template>