<template>
  <section
    class="hidden md:block bg-white px-4 pt-28 pb-28 md:px-16 2xl:px-29 xl:px-20"
    aria-labelledby="why-title"
  >
    <h2
      id="why-title"
      class="text-[#292462] xl:text-[42px] lg:text-[32px] text-[26px] font-bold text-center mb-14 font-['Satoshi'] tracking-[-0.02em]"
    >
      Why Teams Use IntelliToggle
    </h2>

    <div class="2xl:w-[1394px] mx-auto grid grid-cols-1 md:grid-cols-3 2xl:gap-[100px] xl:gap-16 gap-10">
      <article
        v-for="item in items"
        :key="item.title"
        class="space-y-5"
      >
        <div
          class="grid place-content-center xl:w-[129px] xl:h-[118px] lg:w-[119px] lg:h-[108px] w-[100px] h-[96px] bg-[#EDECF6] border border-[#292462] rounded-md"
        >
          <img
            :src="item.icon"
            :alt="item.title"
            class="max-w-full max-h-full"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="mt-2">
          <h3
            class="text-[#1A1C3D] font-semibold xl:text-[25px] lg:text-[20px] text-[18px] font-['Inter'] leading-tight"
          >
            {{ item.title }}
          </h3>

          <p
            class="text-[#5F5F60] mt-2 lg:text-[18.5px] text-sm font-['Inter'] leading-tight"
          >
            {{ item.copy }}
          </p>
        </div>
      </article>
    </div>

    <div
      class="2xl:w-[1394px] mx-auto mt-8 mb-6 flex xl:flex-row flex-col items-center justify-between gap-4 lg:py-[16px] lg:px-[32px] px-5 py-5 bg-[#F7F6FB] rounded-[12px] border border-[#d9d7e6]"
    >
      <p class="2xl:text-[24px] xl:text-[21px] text-[18px] text-[#1A1C3D] font-['Inter']">
        <span class="font-semibold">Read a 2-min case note:</span>
        <span class="text-[#5F5F60] font-medium">
          How a sample Flutter app shipped faster with IntelliToggle
        </span>
      </p>

      <a
        href="https://docs.intellitoggle.com"
        class="bg-[#F9A71E] text-center xl:w-[184px] xl:h-[55px] lg:w-[184px] lg:h-[55px] w-full md:w-auto h-[48px] py-1.5 border border-[#F9A71E] rounded-lg font-semibold text-[#292462] hover:bg-[#e8951a] xl:text-[18px] font-['Inter'] grid place-content-center transition-colors"
      >
        Read Now
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    icon: '/figma/icon-rollouts.png',
    title: 'Safer, faster rollouts',
    copy: 'Control feature releases in minutes, not weeks without risking production stability.'
  },
  {
    icon: '/figma/icon-confidence.png',
    title: 'Confidence to ship',
    copy: 'Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.'
  },
  {
    icon: '/figma/icon-ai.png',
    title: 'Future-ready with AI delivery',
    copy: 'Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.'
  }
]
</script>