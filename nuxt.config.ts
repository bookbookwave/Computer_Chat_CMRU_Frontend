// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-socket-io',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],
  // plugins: [{ src: '~/plugins/vue-chat-scroll', ssr: false }],
  css: ['~/assets/css/tailwind.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  apollo: {
    clients: {
      default:
      {
        httpEndpoint: 'http://localhost:3000/graphql',
        inMemoryCacheOptions: {}
      }
    }
  }
})
