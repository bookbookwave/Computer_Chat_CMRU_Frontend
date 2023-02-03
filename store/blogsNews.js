import { defineStore, acceptHMRUpdate } from 'pinia'
export const useBlogNews = defineStore('useBlogNews', {
  state: () => ({
    blogNews: []
  }),
  actions: {
    setBlogNews (blog) {
      this.blogNews = blog
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogNews, import.meta.hot))
}
