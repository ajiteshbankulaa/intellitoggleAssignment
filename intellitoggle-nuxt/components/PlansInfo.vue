<template>
  <section
    class="bg-[#EDECF6] px-4 md:px-16 2xl:px-29 xl:px-20 2xl:pt-30 xl:pt-30 xl:pb-28 lg:pt-38 lg:pb-22 sm:pt-25 sm:pb-46 pt-20 pb-20"
  >
    <h2
      class="text-[#292462] text-center font-bold font-['Satoshi'] xl:text-[42px] lg:text-[32px] text-[26px] sm:mb-12 mb-10 tracking-[-0.02em]"
    >
      Plans Built For Every Stage Of Growth
    </h2>

    <!-- Mobile pricing card -->
    <div class="sm:hidden w-full max-w-[360px] mx-auto mb-8">
      <div
        class="rounded-[16px] bg-gradient-to-t from-[#0F1026] to-[#42389E] px-5 py-6 text-white shadow-[0_8px_22px_rgba(14,16,38,0.28)]"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex flex-col gap-2">
            <span class="inline-flex w-fit rounded-full bg-[#F9A71E] px-3 py-1 text-[12px] font-semibold text-[#292462]">
              Popular
            </span>
            <p class="text-[24px] font-semibold font-['Satoshi'] leading-tight">
              Enhance Plan
            </p>
          </div>

          <span
            class="mt-1 inline-flex -rotate-[10deg] rounded-full bg-[#E1E2F0] px-3 py-1 text-[12px] font-medium text-[#292462]"
          >
            Billed annually
          </span>
        </div>

        <div class="mt-6 flex items-end gap-2 font-['Inter']">
          <span class="text-[52px] font-semibold leading-none">$149</span>
          <span class="text-[18px] leading-[1.2] mb-1">/month</span>
        </div>

        <div class="my-6 h-px bg-white/15"></div>

        <ul class="space-y-3 text-[14px] leading-[1.5] text-white/90 font-['Inter']">
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Multi-environment support (Dev / Staging / Prod)</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Unlimited feature flags and projects</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Advanced targeting rules with custom attributes</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Environment-specific flags</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Real-time streaming updates (WebSocket / gRPC)</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Analytics hooks (flag usage tracking)</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Built-in A/B testing / experimentation dashboard</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>Audit logs (90-day retention + export in CSV/JSON)</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-[2px]">✓</span>
            <span>API access with multiple keys &amp; custom roles</span>
          </li>
        </ul>

        <a
          href="https://app.intellitoggle.com"
          class="mt-8 h-[52px] w-full rounded-[10px] border border-white/70 text-white font-['Inter'] font-semibold text-[16px] grid place-content-center hover:bg-white/10 transition-colors"
        >
          Subscribe
        </a>
      </div>
    </div>

    <!-- Desktop top pricing card -->
    <div
      class="hidden sm:block 2xl:w-[371px] xl:w-[300px] lg:w-[371px] mx-auto bg-gradient-to-t from-[#0F1026] to-[#42389E] rounded-[12px] xl:h-[154px] p-[24px]"
    >
      <p class="text-white text-center font-['Inter'] font-normal xl:text-[23px] text-[20px]">
        Price starts at
      </p>

      <p class="text-white text-center flex items-center justify-center gap-3 mt-2 font-['Inter']">
        <span class="text-[48px] font-semibold leading-none">$10</span>
        <span class="text-[26px] leading-none font-normal">/month</span>
      </p>
    </div>

    <div
      class="hidden sm:block 2xl:w-[371px] xl:w-[300px] lg:w-[371px] w-full mx-auto mt-5"
    >
      <a
        href="https://www.intellitoggle.com/pricing"
        class="w-full xl:h-[59px] lg:h-[46px] h-[47px] rounded-lg bg-[#F9A71E] text-[#0F1026] font-['Inter'] font-semibold xl:text-[18px] lg:text-[20px] text-[16px] grid place-content-center hover:bg-[#e8951a] transition-colors"
      >
        View Subscription Details
      </a>
    </div>

    <!-- Sandbox CTA card -->
    <div
      class="2xl:w-[1394px] 2xl:h-[205px] lg:h-[182px] w-full max-w-[360px] sm:max-w-none min-h-[340px] sm:min-h-0 mx-auto mt-8 bg-white shadow-[0_0px_5px_-1.76px_rgba(0,0,0,0.5)] xl:px-8 lg:pl-8 lg:pr-3 sm:px-8 px-6 lg:rounded-[12px] rounded-[8px] flex sm:flex-row flex-col items-center lg:justify-between justify-evenly gap-6"
    >
      <div class="lg:w-3/5 w-full">
        <p
          class="text-[#1A1C3D] font-['Satoshi'] xl:text-[33px] lg:text-[24px] text-[18px] font-semibold lg:text-start text-center tracking-[-0.02em]"
        >
          Start Your 7-Day Free Sandbox Plan
        </p>

        <p
          class="text-[#5F5F60] font-['Inter'] xl:text-[18.5px] lg:text-[16px] text-sm mt-2 lg:text-start text-center"
        >
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <div class="xl:w-[400px] lg:w-[384px] w-full">
        <div class="flex xl:flex-row flex-col justify-center xl:gap-6 lg:gap-2 gap-2">
          <a
            href="https://app.intellitoggle.com"
            class="bg-[#F9A71E] xl:w-[184px] xl:h-[55px] lg:w-[184px] lg:h-[55px] w-full h-[55px] border border-[#F9A71E] rounded-lg font-['Inter'] font-semibold text-[#0F1026] hover:bg-[#e8951a] xl:text-[18.5px] text-[16px] grid place-content-center transition-colors"
          >
            Get Started
          </a>

          <a
            href="https://docs.intellitoggle.com"
            class="bg-transparent xl:w-[184px] xl:h-[55px] lg:w-[184px] lg:h-[55px] w-full h-[55px] border border-[#F9A71E] rounded-lg font-['Inter'] font-semibold text-[#F9A71E] hover:bg-[#F9A71E] hover:text-[#0F1026] xl:text-[18.5px] text-[16px] grid place-content-center transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>