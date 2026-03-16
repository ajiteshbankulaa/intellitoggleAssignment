<template>
  <section class="bg-white px-4 pt-20 pb-10 sm:pt-25 sm:pb-12 md:px-16 lg:pt-10 xl:px-20 xl:pt-40 xl:pb-20 2xl:px-29 2xl:pt-24 2xl:pb-20" aria-labelledby="control-title">
    
    <h2 id="control-title" class="mb-5 text-center text-[26px] font-bold text-[#292462] sm:mb-8 lg:text-[32px] xl:text-[43px] 2xl:mb-11 tracking-[-0.02em]">
      Control &amp; Power-focused
    </h2>

    <div class="mx-auto flex w-full max-w-[1680px] flex-col items-center justify-between gap-12 sm:flex-row sm:gap-12 xl:gap-[95px] snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      
      <article 
        v-for="card in cards" 
        :key="card.title" 
        class="w-full flex-none space-y-3 snap-center lg:w-[350px] 2xl:w-[496px]"
      >
        <img
          :src="card.image"
          :alt="card.title"
          class="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        >
        
        <div class="flex flex-col items-start pt-2">
          <h3 class="text-[20px] font-semibold text-[#1A1C3D] lg:text-[25px]">
            {{ card.title }}
          </h3>
          
          <p class="mt-2 text-[14px] leading-tight text-[#5F5F60] lg:text-[18.5px] 2xl:mt-0">
            {{ card.copy }}
          </p>
          
          <a href="#" class="mt-6 flex h-[41px] w-[190px] items-center justify-center rounded-md border border-[#F9A71E] bg-white text-[14px] font-semibold text-[#F9A71E] transition hover:bg-[#F9A71E] hover:text-[#0F1026] lg:h-[46px] lg:w-[243px] lg:text-[18px] 2xl:translate-y-1">
            View Documentation
          </a>
        </div>
      </article>

    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Connect',
    copy: 'Install SDK in your Dart project in 2 mins.',
    image: '/figma/feature-connect.png'
  },
  {
    title: 'Create Flags',
    copy: 'Define features in IntelliToggle dashboard.',
    image: '/figma/create-flags.svg'
  },
  {
    title: 'Ship & Control',
    copy: 'Flip switches anytime, see instant results.',
    image: '/figma/ship-control.svg'
  }
]
</script>