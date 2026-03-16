<template>
  <header 
    :class="[
      'fixed inset-x-0 top-0 z-50 w-full text-white transition-all duration-300',
      isScrolled || open ? 'bg-[#292462]/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="mx-auto flex h-[60px] w-full items-center justify-between px-4 md:h-[76px] md:px-8">
      <a href="#" class="flex items-center gap-2" aria-label="IntelliToggle home">
        <img
          src="/figma/logo-light.png"
          alt="IntelliToggle"
          class="h-6 w-auto md:h-7"
          width="210"
          height="60"
          decoding="async"
        />
      </a>

      <button
        ref="menuButton"
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center md:h-10 md:w-10"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <img
          src="/figma/menu.png"
          alt=""
          class="h-5 w-5 md:h-6 md:w-6 object-contain"
          width="24"
          height="24"
          aria-hidden="true"
          decoding="async"
        />
      </button>
    </div>

    <div
      v-show="open"
      id="mobile-nav"
      class="mx-4 mb-4 rounded-xl border border-white/10 bg-[#2b247c] px-4 pb-4 pt-3 shadow-2xl"
    >
      <nav class="flex flex-col text-sm font-medium text-white/95" aria-label="Mobile">
        <a href="#" class="border-b border-white/10 py-3 transition-colors hover:text-[#F9A71E]" @click="closeMenu">Home</a>
        <a href="#" class="border-b border-white/10 py-3 transition-colors hover:text-[#F9A71E]" @click="closeMenu">About</a>
        <a href="#" class="border-b border-white/10 py-3 transition-colors hover:text-[#F9A71E]" @click="closeMenu">Pricing</a>
        <a href="#" class="border-b border-white/10 py-3 transition-colors hover:text-[#F9A71E]" @click="closeMenu">Contact</a>

        <a
          href="#"
          class="mt-4 inline-flex items-center justify-center rounded-lg bg-[#f4af18] px-4 py-3 text-[14px] font-bold text-[#221b0c] transition-transform hover:scale-105"
          @click="closeMenu"
        >
          Start Sandbox
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch, onMounted } from 'vue'

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

// FIX: Scroll listener to toggle the background color
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position on load
})

watch(open, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>