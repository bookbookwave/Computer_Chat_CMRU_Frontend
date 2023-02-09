import { defineStore, acceptHMRUpdate } from 'pinia'
export const useEnv = defineStore('env', {
  state: () => ({
    BACKEND_API_URL: 'https://9f20-2001-44c8-4653-c5c3-11dd-a26b-b6dc-a277.ap.ngrok.io'
    // BACKEND_API_URL: useRuntimeConfig().BACK_END_API_URL
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnv, import.meta.hot))
}
