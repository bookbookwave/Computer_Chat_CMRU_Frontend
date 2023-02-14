import { defineStore, acceptHMRUpdate } from 'pinia'
export const useQueryStore = defineStore('useQueryStore', {
  state: () => ({
    users: [],
    projects: [],
    status: [],
    projectType: [],
    projectById: [],
    banner: [],
    RoomById: [],
    RoomByRoomId: [],
    userNoProject: []
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
    setBanner (banner) {
      this.banner = banner
    },
    setRoomByUserId (roomId) {
      this.RoomById = roomId
    },
    setRoomByRoomId (roomId) {
      this.RoomByRoomId = roomId
    },
    setUserNoProject (users) {
      this.userNoProject = users
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQueryStore, import.meta.hot))
}
