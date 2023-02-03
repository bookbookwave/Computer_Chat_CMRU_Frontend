import { defineStore, acceptHMRUpdate } from 'pinia'
export const useLogLogin = defineStore('useLogLogin', {
  state: () => ({
    logByUser: [],
    allLogLogin: []
  }),
  actions: {
    setLogByUser (log) {
      this.logByUser = log
    },
    setAllLogLogin (log) {
      this.allLogLogin = log
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLogLogin, import.meta.hot))
}
