import { defineStore, acceptHMRUpdate } from 'pinia'
export const useEnv = defineStore('env', {
  state: () => ({
    BACKEND_API_URL: 'http://localhost:3000'
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnv, import.meta.hot))
}
