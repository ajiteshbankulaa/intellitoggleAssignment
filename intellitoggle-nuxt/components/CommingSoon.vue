<template>
  <section 
    id="using-ai" 
    class="w-5/5 mx-auto xl:aspect-[5/2.85] lg:aspect-[5/5] aspect-[5/6] bg-cover bg-center bg-no-repeat bg-[#292462] flex flex-col items-center justify-center gap-4 px-4 md:px-16 2xl:px-29 xl:px-20 sm:py-10 py-8 xl:translate-y-0 lg:translate-y-10"
    style="background-image: radial-gradient(circle, rgba(41, 36, 98, 0.2) 0%, rgba(41, 36, 98, 0.9) 100%), url('/figma/AICHIPBG.png');"
    aria-labelledby="ai-title"
  >
    <div class="relative z-10 w-full">
      
      <a href="https://www.dartcodeai.com" class="bg-[#F9A71E] text-center block xl:w-[181px] lg:w-[152px] lg:h-[44px] w-[155px] h-[47px] mx-auto py-1.5 border-1 border-[#F9A71E] rounded-full font-semibold text-[#0F1026] cursor-pointer hover:bg-[#e8951a] xl:text-[18px] text-[14px] 2xl:mt-0 2xl:translate-y-3 grid place-content-center font-['DM Sans']">
        Coming Soon
      </a>

      <h2 id="ai-title" class="text-white xl:text-[42px] lg:text-[32px] text-[26px] font-bold text-center 2xl:mt-0 mt-3 2xl:mb-13 xl:mb-16 mb-10 xl:font-['Satoshi'] lg:font-[DM Sans] font-['Satoshi'] 2xl:translate-y-3">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <div class="flex 2xl:flex-row lg:flex-row flex-wrap flex-col xl:justify-between 2xl:w-[1440px] xl:mx-auto 2xl:gap-15 xl:lg:gap-14 lg:gap-10 gap-6">
        <article 
          v-for="feature in features" 
          :key="feature.title" 
          class="2xl:w-[660px] xl:h-[196px] xl:w-[560px] lg:w-[417px] lg:h-[268px] w-full h-[233px] 2xl:p-[24px] p-5 rounded-lg backdrop-blur-xs text-center shadow-[0_0px_6px_-1.76px_rgba(255,255,225,0.8)] flex flex-col items-center justify-center 2xl:translate-y-1.5 transition-all hover:bg-white/[0.05]"
          style="background: rgba(255, 255, 255, 0.02); border: 0.2px solid rgba(255, 255, 255, 0.5); box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.1);"
        >
          <div class="grid place-content-center p-2 bg-[#EDECF6] border-1 border-[#292462] rounded-md 2xl:mb-0 mb-6">
            <img :src="feature.icon" :alt="feature.title" class="h-8 w-8 object-contain" />
          </div>
          
          <h4 class="2xl:mt-4 2xl:translate-y-3 text-white xl:text-[25px] lg:text-[22px] text-[20px] font-semibold leading-6">
            {{ feature.title }}
          </h4>
          
          <p class="2xl:translate-y-[17px] text-[#EDECF6] xl:text-[18.5px] sm:text-[18px] text-[14px] xl:mt-0 lg:mt-1 leading-6 opacity-80">
            {{ feature.copy }}
          </p>
        </article>
      </div>

      <h3 class="text-[#F9A71E] text-[33px] xl:block hidden font-semibold text-center sm:my-12 my-10 font-['Satoshi']">
        Enterprise Only
      </h3>

      <div class="xl:my-0 mt-11 w-full rounded-lg backdrop-blur-xs shadow-[0_0px_6px_-1.76px_rgba(255,255,225,0.8)] 2xl:py-7 2xl:pl-7 2xl:pr-13 lg:py-5 sm:py-8 sm:px-8 py-4 px-5 flex xl:flex-row lg:flex-col flex-col items-center justify-between gap-6 2xl:-translate-y-2 xl:translate-y-0 lg:translate-y-2 border border-white/5" style="background: rgba(255, 255, 255, 0.02);">
        
        <div class="xl:w-3/5 lg:w-[357px] w-5/5 xl:text-start text-center">
          <p class="text-white xl:text-[25px] lg:text-[22px] text-lg font-semibold">
            <span class="text-[#F9A71E]">Be The First</span> To Try Out Our New AI Features.
          </p>
        </div>

        <div class="xl:w-[474px] lg:w-[426px] w-5/5">
          <form class="relative group" @submit.prevent>
            <input 
              type="email" 
              placeholder="Enter email address" 
              class="w-full rounded-lg bg-black/20 backdrop-blur-xs shadow-[0_0px_6px_-1.76px_rgba(255,255,225,0.8)] pl-4 lg:pr-48 pr-4 py-[9px] h-[55px] text-[#EDECF680] lg:placeholder:text-base placeholder:text-[15px] border border-white/10 focus:outline-none"
            />
            <button type="submit" class="xl:block hidden sm:mt-0 mt-4 sm:absolute sm:top-[6px] sm:right-[6px] sm:translate-[1px] bg-[#F9A71E] text-center xl:w-[202px] h-[42px] border-1 border-[#F9A71E] rounded-md font-semibold text-[#1A1C3D] cursor-pointer hover:bg-[#e8951a] text-[18px]">
              Join AI Early Access
            </button>
            <button type="submit" class="xl:hidden block mt-0 absolute top-[6px] right-[6px] translate-[1px] bg-[#F9A71E] text-center lg:w-[154px] w-[90px] h-[42px] border-1 border-[#F9A71E] rounded-md font-semibold text-[#1A1C3D] cursor-pointer hover:bg-[#e8951a] lg:text-[18px] text-[12px]">
              Get access
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '/figma/flag.svg',
    title: 'AutoFlag AI (LLM-Assisted Flag Creation)',
    copy: 'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.'
  },
  {
    icon: '/figma/robot.svg',
    title: 'SmartRamp AI (AI-Driven Rollout Optimization)',
    copy: 'Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.'
  },
  {
    icon: '/figma/insights.svg',
    title: 'ExplainFlags AI (LLM Root-Cause + Insights)',
    copy: 'Understand issues instantly with AI-generated, plain-language insights tied to your flags.'
  },
  {
    icon: '/figma/segment.svg',
    title: 'AutoSegment AI (Behavioral Segmentation)',
    copy: 'Target the right users automatically. AI builds segments from live behavior—no manual rules.'
  }
]
</script>