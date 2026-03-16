<template>
  <section
    id="about"
    class="bg-[#f4f2f8] px-4 pt-[80px] pb-[80px] sm:pt-[16px] sm:pb-[144px] md:px-[64px] lg:pt-[88px] xl:px-[80px] xl:pt-[144px] 2xl:px-[116px] 2xl:pt-[196px]"
    aria-labelledby="about-title"
  >
    <h2
      id="about-title"
      class="hidden sm:block mb-[20px] text-center text-[30px] font-bold text-[#292462] sm:mb-[56px] sm:text-[32px] lg:text-[32px] xl:text-[42px] 2xl:translate-y-2"
    >
      What Is IntelliToggle
    </h2>

    <div class="mx-auto flex max-w-[1680px] flex-col items-center justify-between gap-6 lg:flex-row">
      <div class="w-full lg:w-[469px] xl:w-full 2xl:w-[623px] 2xl:px-[5px]">
        <h3 class="text-[26px] font-semibold leading-tight text-[#323338] lg:text-[24px] lg:-translate-y-4 xl:text-[32px] xl:-translate-y-0 2xl:mt-2">
          Your AI Dart App's Control Panel For Feature Releases
        </h3>

        <p class="mt-3 mb-1 text-[14px] leading-tight text-[#5F5F60] sm:text-[15px] lg:text-[14px] lg:-translate-y-4 xl:text-[18px] xl:-translate-y-0">
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
        </p>

        <h4 class="mt-6 text-[18px] font-semibold text-[#323338] lg:mt-4 lg:text-[22px] lg:-translate-y-4 xl:text-[24px] xl:-translate-y-0 2xl:translate-y-0">
          Benefits
        </h4>

        <ul class="mt-2 list-inside list-disc text-[14px] leading-tight text-[#5F5F60] lg:-translate-y-3 xl:text-[18px] xl:-translate-y-0 2xl:translate-y-2">
          <li class="ml-[10px]">Toggle new features without app updates</li>
          <li class="ml-[10px]">Roll out to specific users or regions</li>
          <li class="ml-[10px]">Instantly rollback when needed</li>
        </ul>
      </div>

      <div class="mt-3 w-full rounded-[8px] bg-gradient-to-t from-[#0F1026] to-[#42389E] p-[20px] shadow-xl lg:mt-0 lg:w-[383px] lg:rounded-[12px] lg:px-[40px] lg:py-[30px] xl:w-full 2xl:w-[835px] 2xl:p-[51px]">
        <img
          src="/figma/analytics-screen.png"
          alt="Feature analytics dashboard"
          class="h-auto w-full rounded-[4px] shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>