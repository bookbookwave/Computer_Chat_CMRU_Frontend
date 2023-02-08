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
        httpEndpoint: process.env.BACKEND_API_URL || 'http://localhost:3000/graphql',
        inMemoryCacheOptions: {}
      }
    }
  },
  runtimeConfig: {
    apiSecret: '123',
    BACK_END_API_URL: process.env.BACKEND_API_URL || '',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.API_BASE || 'default_api_url',
      otherUrl: process.env.OTHER_URL || 'default_other_url'
    }
  }
})
