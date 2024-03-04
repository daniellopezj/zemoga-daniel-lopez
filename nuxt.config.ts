// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'Zenoga Daniel',
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  css: ['~/assets/scss/styles.scss'],
  srcDir: 'src/',
})
