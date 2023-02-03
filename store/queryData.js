import { defineStore, acceptHMRUpdate } from 'pinia'
export const useQueryStore = defineStore('useQueryStore', {
  state: () => ({
    users: [],
    projects: [],
    status: [],
    projectType: [],
    projectById: [],
    fileUploadById: [],
    banner: []
  }),
  getters: {

  },
  actions: {
    setUser (users) {
      this.users = users
    },
    setProject (projects) {
      this.projects = projects
    },
    setStatus (status) {
      this.status = status
    },
    setProjectType (type) {
      this.projectType = type
    },
    setProjectById (projectId) {
      this.projectById = projectId
    },
    setFileUploadById (fileUploadId) {
      this.fileUploadById = fileUploadId
    },
    setBanner (banner) {
      this.banner = banner
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQueryStore, import.meta.hot))
}
