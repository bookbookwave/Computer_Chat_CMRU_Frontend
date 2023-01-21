import { defineStore, acceptHMRUpdate } from 'pinia'
export const useCounter = defineStore('StoreDatabase', {
  state: () => ({
    users: []
  }),
  getters: {

  },
  actions: {
    setUser(users) {
      this.users = users
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
