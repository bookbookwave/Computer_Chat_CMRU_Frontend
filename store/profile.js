import { defineStore, acceptHMRUpdate } from 'pinia'
export const useProfile = defineStore('Profile', {
  state: () => ({
    userId: '',
    email: '',
    avatar: '',
    role: '',
    name: ''
  }),
  actions: {
    setUser ({ userId, email, avatar, role, name }) {
      this.userId = userId
      this.email = email
      this.avatar = avatar
      this.role = role
      this.name = name
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfile, import.meta.hot))
}
