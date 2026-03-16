<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <SiteHeader />

    <div class="hero-stage">
      <div class="hero-vector" aria-hidden="true">
        <div class="hero-vector__band"></div>
        <div class="hero-vector__base"></div>
      </div>

      <div class="hero-inner">
        <div class="flex w-full max-w-[1200px] flex-col items-center justify-center text-center">
          
          <div class="hidden md:flex w-full flex-col items-center gap-[32px]">
            <div class="flex flex-col items-center gap-[20px]">
              <h1 id="hero-title" class="text-[68px] font-bold leading-[1.1] tracking-[-0.03em] text-white whitespace-nowrap">
                The First
                <span class="inline-block rounded-[8px] bg-[#f4af18] px-[24px] py-[4px] text-[#221f46]">Dart-Native</span>
                Feature Flag
                <br />
                With DartCodeAI
              </h1>

              <div class="flex flex-col items-center gap-[12px]">
                <p class="max-w-[900px] text-[24px] font-medium leading-[1.4] text-white/90">
                  Feature flags built for Dart, Ship faster, roll back
                  <br />
                  safely, and scale with AI-powered delivery
                </p>
                <p class="text-[24px] font-bold text-[#f4af18]">
                  Starting at just $1/month
                </p>
              </div>
            </div>

            <div class="mx-auto flex w-fit flex-col items-start gap-[10px]">
              <p class="pl-[2px] text-[13px] font-medium text-white/70">Valid till 15th September,2025</p>
              <div class="flex flex-row gap-[16px]">
                <a href="#plans" class="inline-flex h-[52px] w-[240px] items-center justify-center rounded-[8px] bg-[#f4af18] text-[16px] font-bold text-[#221f46] transition hover:-translate-y-0.5 hover:bg-[#e8951a]">
                  Get Access
                </a>
                <a href="#using-ai" class="inline-flex h-[52px] w-[240px] items-center justify-center rounded-[8px] border border-[#f4af18] bg-transparent text-[16px] font-bold text-[#f4af18] transition hover:bg-[#f4af18]/10">
                  Join AI Early Access
                </a>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-col items-center gap-[32px] md:hidden px-2">
            <h1 class="text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-white">
              The First
              <span class="my-1 inline-block rounded-[6px] bg-[#f4af18] px-[12px] py-[2px] text-[#221f46]">Dart-Native</span>
              <br />
              Feature Flag With DartCodeAI
            </h1>

            <p class="text-[16px] font-medium leading-[1.5] text-white/90 px-2">
              Ship faster, control rollouts, and get ready for AI-powered delivery, starting at just $1/month for a limited time
            </p>

            <div class="flex w-full flex-col gap-[16px]">
              <a href="#plans" class="inline-flex min-h-[56px] w-full items-center justify-center rounded-[8px] bg-[#f4af18] text-[16px] font-bold text-[#221f46] transition hover:-translate-y-0.5 hover:bg-[#e8951a]">
                Get Started
              </a>
              <a href="#using-ai" class="inline-flex min-h-[56px] w-full items-center justify-center rounded-[8px] border border-[#f4af18] bg-transparent text-[16px] font-bold text-[#f4af18] transition hover:bg-[#f4af18]/10">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="hero-dashboard-wrap">
          <img
            src="/figma/hero-dashboard.png"
            alt=""
            class="hero-dashboard-back"
            width="1360"
            height="712"
            decoding="async"
            aria-hidden="true"
          />
          <img
            src="/figma/hero-dashboard.png"
            alt="IntelliToggle dashboard"
            class="hero-dashboard-front"
            width="1360"
            height="712"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #f4f2f8;
  --panel: #efedf7;
  --text: #221f46;
  --muted: #706c90;
  --brand: #443bb0;
  --brand-deep: #16133f;
  --brand-dark: #2f298d;
  --accent: #f4af18;
  --line: #d9d4ea;
  --hero-seam: #e8e6ef;
  --header-bg: #42389e;
}

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
}

img { display: block; max-width: 100%; }

/* =========================
   HEADER STYLES
   ========================= */
.site-header { position: absolute; top: 0; left: 0; width: 100%; z-index: 50; background: transparent; color: #fff; }
.site-header__inner {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 133px;
  padding: 56px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

/* =========================
   HERO STYLES (Desktop)
   ========================= */
.hero-section { position: relative; overflow: hidden; color: #ffffff; background: linear-gradient(180deg, #42389e 0%, #0f1026 100%); min-height: 1543px; }
.hero-stage { position: relative; width: 100%; min-height: 1543px; }

.hero-inner {
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 270px 24px 0;
}

.hero-dashboard-wrap { position: relative; width: min(100%, 1640px); display: flex; justify-content: center; margin-top: 60px; padding-bottom: 140px; }
.hero-dashboard-back { position: absolute; top: -56px; left: 50%; width: min(86%, 1480px); transform: translateX(-50%); opacity: 0.28; filter: blur(3px); z-index: 1; pointer-events: none; }
.hero-dashboard-front { position: relative; z-index: 3; width: min(100%, 1360px); border-radius: 12px; box-shadow: 0 14px 36px rgba(8, 8, 24, 0.22), 0 2px 8px rgba(8, 8, 24, 0.10); }

/* =========================
   BACKGROUND VECTORS (Original Restored)
   ========================= */
.hero-vector { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.hero-vector__base { position: absolute; left: 0; right: 0; bottom: 0; height: 1450px; background: #f5f4f8; clip-path: polygon(0 60%, 100% 35%, 100% 100%, 0 100%); z-index: 1; }
.hero-vector__band { position: absolute; left: 50%; bottom: 590px; width: 122%; height: 365px; background: #e5e3ec; clip-path: polygon(0% 100%, 0% 80%, 100% 0%, 100% 40%); transform: translateX(-50%) rotate(-3deg); transform-origin: center center; z-index: 3; }

/* =========================
   MOBILE RESPONSIVE OVERRIDES
   ========================= */
@media (max-width: 1023px) {
  .hero-section, .hero-stage { min-height: 1240px; }
  .site-header__inner { padding: 40px 48px; }
  
  /* FIX: Tablet Padding */
  .hero-inner { padding: 180px 24px 0; }

  /* Original Vectors */
  .hero-vector__base { height: 900px; clip-path: polygon(0 75%, 100% 49%, 100% 100%, 0 100%); }
  .hero-vector__band { bottom: 320px; width: 156%; height: 190px; transform: translateX(-50%) rotate(-7.4deg); }
}

@media (max-width: 767px) {
  .hero-section, .hero-stage { min-height: 880px; }
  .site-header__inner { padding: 24px; min-height: auto; }

  /* FIX: Mobile Padding to clear the header */
  .hero-inner { padding: 140px 16px 0; }

  .hero-dashboard-wrap {
    padding-bottom: 70px;
    margin-top: 40px;
    width: calc(100% - 32px);
    margin-inline: auto;
  }

  .hero-dashboard-back { display: none; }
  
  /* Original Vectors */
  .hero-vector__base { height: 570px; clip-path: polygon(0 80%, 100% 60%, 100% 100%, 0 100%); }
  .hero-vector__band { bottom: 140px; width: 187%; height: 92px; transform: translateX(-50%) rotate(-12deg); }
}
</style>