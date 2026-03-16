<template>
  <footer
    id="contact"
    class="bg-[#ECEBF5] px-4 md:px-16 2xl:px-29 xl:px-20 xl:pt-25 lg:pt-20 pt-16 lg:pb-16 pb-8"
  >
    <div class="grid grid-cols-1 lg:grid-cols-9 2xl:gap-5 lg:gap-0 sm:gap-3 gap-8 w-full">
      <!-- Left brand column -->
      <div class="lg:col-span-3">
        <img
          src="/figma/logo-purple.png"
          alt="IntelliToggle"
          class="xl:w-[170.5px] w-[150px] mb-2"
          width="170"
          height="50"
          loading="lazy"
          decoding="async"
        />

        <p
          class="text-[#4A4B4D] py-4 xl:text-[18.5px] lg:text-[16px] text-[15px] xl:w-[379px] lg:w-[300px] leading-tight"
        >
          IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
        </p>

        <div class="flex flex-row mb-6 gap-x-3">
          <a href="#" class="inline-block">
            <img
              src="/figma/social-x.png"
              alt="Social icon"
              class="w-[26px] h-[26px]"
              width="26"
              height="26"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>

      <!-- Resources -->
      <div class="lg:col-span-2 xl:text-[18px]">
        <h3 class="mb-4 text-[#5F5F60] font-['Inter']">Resources</h3>
        <div class="space-y-3 flex flex-col text-[#323338] font-semibold font-['Inter']">
          <a href="#" class="inline-block cursor-pointer">Why IntelliToggle Is Different</a>
          <a href="#" class="inline-block cursor-pointer">Customer Support</a>
          <a href="#" class="inline-block cursor-pointer">Terms &amp; Conditions</a>
          <a href="#" class="inline-block cursor-pointer">Privacy Policy</a>
        </div>
      </div>

      <!-- Company -->
      <div class="lg:col-span-2 xl:text-[18px]">
        <h3 class="mb-4 text-[#5F5F60] font-['Inter']">Company</h3>
        <div class="space-y-3 flex flex-col text-[#323338] font-semibold font-['Inter']">
          <a href="#plans" class="inline-block cursor-pointer">Pricing</a>
          <a href="#" class="inline-block cursor-pointer">Documentation</a>
          <a href="#about" class="inline-block cursor-pointer">About Us</a>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="lg:col-span-2 xl:text-[18px] w-full lg:mt-2 mt-2">
        <div class="flex flex-col items-start">
          <h3 class="mb-4 text-[#323338] font-semibold font-['Inter']">
            Subscribe to Newsletter
          </h3>

          <form
            class="flex flex-row items-center justify-start xl:w-[321px] lg:w-[321px] h-[45.8px] w-full"
            @submit.prevent
          >
            <label for="newsletter-email" class="sr-only">Email address</label>

            <input
              id="newsletter-email"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="Enter email address"
              class="xl:px-4 px-3 bg-white outline-none border border-[#d8d4ea] border-r-0 w-full h-full text-sm rounded-l-[6.67px] text-[#26224a] placeholder:text-[#8a86a7]"
            />

            <button
              type="submit"
              class="text-sm w-[115.8px] h-full bg-[#F9A71E] text-[#292462] px-2 shrink-0 outline-none rounded-r-md cursor-pointer font-semibold font-['Inter'] hover:bg-[#e8951a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

  </footer>
</template>