<template>
  <section class="bg-white px-4 pt-20 pb-20 sm:pt-30 sm:pb-30 md:px-16 2xl:px-29 2xl:pt-28 2xl:pb-26" aria-labelledby="comparison-title">
    
    <h2 id="comparison-title" class="mb-5 text-center text-[26px] font-bold text-[#292462] sm:mb-10 lg:mb-7 lg:text-[32px] xl:mb-10 xl:text-[43px] 2xl:translate-y-1.5 font-['Satoshi',sans-serif] tracking-tight">
      Dart-Powered Feature Flag
    </h2>

    <div class="mx-auto w-full text-center lg:w-[608px] lg:text-start xl:w-[826px] xl:text-center">
      <h3 class="text-[18px] font-semibold text-[#1A1C3D] lg:text-[24px] xl:text-[33px] 2xl:translate-y-1.5 font-['Satoshi',sans-serif]">
        Not Another Generic Feature Flag Tool
      </h3>
      <p class="mt-2 text-[14px] leading-tight text-[#5F5F60] lg:text-[18px] xl:mx-10 xl:text-[18px]">
        Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
      </p>
    </div>

    <div id="scrollContainer" class="mx-auto mt-12 mb-3 overflow-x-auto rounded-xl border border-[#d8d4ea]/60 2xl:w-[1440px] [&::-webkit-scrollbar]:hidden">
      <table class="w-full min-w-[900px] border-collapse bg-white text-left font-['Satoshi',sans-serif]">
        
        <thead class="bg-gradient-to-r from-[#42389E] to-[#0F1026] text-white">
          <tr>
            <th class="px-8 py-5 text-[15px] font-bold uppercase tracking-wider">Features</th>
            <th class="px-8 py-5 text-center text-[15px] font-bold">IntelliToggle</th>
            <th class="px-8 py-5 text-center text-[15px] font-bold">Other Feature Flag</th>
          </tr>
        </thead>
        
        <tbody class="text-[#323338]">
          <tr 
            v-for="row in rows" 
            :key="row.feature" 
            class="border-b border-white bg-[#F1F2F9] transition-colors last:border-0 hover:bg-[#e8eaf4]"
          >
            <td class="px-8 py-3.5 text-[14px] font-medium md:text-[16px]">
              {{ row.feature }}
            </td>
            
            <td class="px-8 py-3.5 text-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                <path d="M20 6L9 17L4 12" stroke="#42389E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </td>
            
            <td class="px-8 py-3.5 text-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto opacity-30">
                <path d="M18 6L6 18M6 6L18 18" stroke="#5F5F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { feature: 'Dart-native SDK & server' },
  { feature: 'End-to-end type safety' },
  { feature: 'AI-assisted roll-outs & cleanup' },
  { feature: 'A/B testing built-in' },
  { feature: 'Dart-Powered SDKs' }
]
</script>