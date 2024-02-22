// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    "nuxt-security", // https://nuxt.com/modules/security
    "@nuxtjs/eslint-module", // https://nuxt.com/modules/eslint | https://eslint.vuejs.org
    "@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html
    "@nuxtjs/tailwindcss", // https://tailwindcss.nuxtjs.org
    "@vueuse/nuxt", // https://vueuse.org/guide/#nuxt
    "@nuxt/image", // https://image.nuxt.com
  ],
});
