import { defineStore, acceptHMRUpdate } from 'pinia'
export const useMessage = defineStore('Message', {
  state: () => ({
    messages: []
  }),
  actions: {
    setMessage (message) {
      this.messages = message
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMessage, import.meta.hot))
}
