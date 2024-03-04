// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    ['@nuxtjs/robots', { configPath: '~/config/robots.config' }],
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Zenoga Daniel López',
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  css: ['~/assets/scss/styles.scss'],
  srcDir: 'src/',
})
