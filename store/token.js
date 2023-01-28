import { defineStore, acceptHMRUpdate } from 'pinia'
export const token = defineStore('token', {
  state: () => ({
    token: ''
  }),
  actions: {
    setUser (token) {
      this.token = token
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnv, import.meta.hot))
}
