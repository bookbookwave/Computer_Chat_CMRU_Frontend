import { defineStore, acceptHMRUpdate } from 'pinia'
export const useEnv = defineStore('env', {
  state: () => ({
    BACKEND_API_URL: 'https://d466-110-77-249-232.ap.ngrok.io'
    // BACKEND_API_URL: useRuntimeConfig().BACK_END_API_URL
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnv, import.meta.hot))
}
