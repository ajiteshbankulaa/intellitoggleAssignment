<template>
  <header
    class="absolute left-0 top-0 z-50 w-full transition-all duration-200"
    :class="{ 'fixed bg-[#42389e]/95 shadow-[0_10px_24px_rgba(11,10,33,0.16)] backdrop-blur-[10px]': isScrolled }"
    @keydown.esc.window="closeMenu"
  >
    <div 
      class="box-border mx-auto flex w-full max-w-[1920px] justify-between px-[24px] transition-all duration-200 lg:px-[120px]"
      :class="[
        isScrolled 
          ? 'min-h-[78px] items-end py-[16px] md:min-h-[92px] md:items-center md:py-[22px]' 
          : 'min-h-[108px] items-end pb-[20px] pt-[29px] md:min-h-[133px] md:items-center md:pb-[40px] md:pt-[56px]'
      ]"
    >
      
      <a href="#" class="flex shrink-0 items-center" aria-label="IntelliToggle home">
        <img
          src="/figma/logo-light.png"
          alt="IntelliToggle"
          class="w-auto transition-all duration-200"
          :class="[
            isScrolled ? 'h-[22px] md:h-[42px]' : 'h-[24px] md:h-[46px]'
          ]"
          width="304"
          height="88"
          decoding="async"
        />
      </a>

      <nav class="hidden flex-1 items-center justify-center gap-[48px] md:flex" aria-label="Primary">
        <a href="#" class="text-[15px] font-medium text-white transition hover:text-white">Home</a>
        <a href="#about" class="text-[15px] font-medium text-white/75 transition hover:text-white">About</a>
        <a href="#plans" class="text-[15px] font-medium text-white/75 transition hover:text-white">Pricing</a>
      </nav>

      <a 
        href="#sandbox" 
        class="hidden shrink-0 items-center justify-center rounded-[6px] bg-[#f4af18] px-[32px] py-[14px] text-[16px] font-bold text-[#221b0c] transition hover:-translate-y-0.5 hover:bg-[#f8b826] md:inline-flex"
      >
        Start Sandbox
      </a>

      <button
        ref="menuButton"
        type="button"
        class="mb-[1px] self-end inline-flex items-center justify-center text-white md:hidden"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span class="sr-only">
          {{ open ? 'Close navigation menu' : 'Open navigation menu' }}
        </span>
        <div class="flex h-[24px] w-[33px] flex-col justify-between" aria-hidden="true">
          <span class="block h-[4px] w-full rounded-full bg-white"></span>
          <span class="block h-[4px] w-full rounded-full bg-white"></span>
          <span class="ml-auto block h-[4px] w-[58%] rounded-full bg-white"></span>
        </div>
      </button>
    </div>

    <div
      v-if="open"
      id="mobile-nav"
      class="bg-[rgba(33,30,104,0.94)] px-[24px] pb-[24px] backdrop-blur-[10px] md:hidden"
    >
      <nav class="flex flex-col border-t border-white/10 pt-[16px]" aria-label="Mobile">
        <a href="#" class="border-b border-white/10 py-[14px] text-[15px] font-medium text-white/92" @click="closeMenu">Home</a>
        <a href="#about" class="border-b border-white/10 py-[14px] text-[15px] font-medium text-white/92" @click="closeMenu">About</a>
        <a href="#plans" class="border-b border-white/10 py-[14px] text-[15px] font-medium text-white/92" @click="closeMenu">Pricing</a>
        <a href="#sandbox" class="mt-[16px] inline-flex min-h-[42px] items-center justify-center rounded-[6px] bg-[#f4af18] px-[16px] py-[10px] text-[14px] font-bold text-[#221b0c]" @click="closeMenu">Start Sandbox</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const isScrolled = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

const toggleMenu = () => {
  open.value = !open.value
}

const closeMenu = () => {
  open.value = false
  menuButton.value?.focus()
}

const handleScroll = () => {
  if (!process.client) return
  isScrolled.value = window.scrollY > 40
}

watch(open, (isOpen) => {
  if (process.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (process.client) {
    document.body.style.overflow = ''
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>