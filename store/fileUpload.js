import { defineStore, acceptHMRUpdate } from 'pinia'
export const useFileUpload = defineStore('useFileUpload', {
  state: () => ({
    fileUpload: []
  }),
  actions: {
    setFile (file) {
      this.fileUpload = file
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFileUpload, import.meta.hot))
}
