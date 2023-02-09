import { defineStore, acceptHMRUpdate } from 'pinia'
export const useEnv = defineStore('env', {
  state: () => ({
    BACKEND_API_URL: 'https://d877-110-170-138-204.ap.ngrok.io'
    // BACKEND_API_URL: useRuntimeConfig().BACK_END_API_URL
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnv, import.meta.hot))
}
