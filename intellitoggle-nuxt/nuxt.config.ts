export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'IntelliToggle — Dart-Native Feature Flags',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Nuxt 3 + TailwindCSS recreation of the IntelliToggle landing page assignment.'
        }
      ]
    }
  },
  compatibilityDate: '2025-02-01'
})
