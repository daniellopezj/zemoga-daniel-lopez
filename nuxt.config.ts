// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/image',
  ],
  app: {
    head: {
      title: 'Zenoga Daniel',
    },
  },
  css: ['~/assets/scss/styles.scss'],
  srcDir: 'src/',
})
