import { useLogLogin } from '~~/store/logLogin'
import {
  LIST_BANNER,
  LIST_BLOG_NEWS,
  LIST_LOG_LOGIN,
  LIST_LOG_LOGIN_BY_ID,
  LIST_PROJECTS,
  LIST_PROJECT_BY_ID,
  LIST_PROJECT_TYPES,
  LIST_ROOM_BY_USER_ID,
  LIST_STATUS,
  LIST_USERS,
  LIST_USERS_NO_PROJECT
} from '~~/apollo/query'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
import { useBlogNews } from '~~/store/blogsNews'
const queryDatabase = async ({ onResult, onError }:any) => {
  try {
    // type typeUsers = {
    //   users: {
    //     id: string,
    //     name: string,
    //     email: string,
    //     // password: string,
    //     role: string,
    //     avatar: string,
    //     createAt: string,
    //     updateAt: string,
    //   }[]
    // }
    // TODO delete this ,It's useless
    await useAsyncQuery<any>(LIST_USERS)

    const users = await useAsyncQuery<any>(LIST_USERS)
    useQueryStore().setUser(users.data.value?.users)

    const usersNoProject = await useAsyncQuery<any>(LIST_USERS_NO_PROJECT)
    useQueryStore().setUserNoProject(usersNoProject.data.value?.usersNoProject)

    const project = await useAsyncQuery<any>(LIST_PROJECTS)
    useQueryStore().setProject(project.data.value?.projects)

    const projectById = await useAsyncQuery<any>(LIST_PROJECT_BY_ID, { id: useProfile().userId })
    useQueryStore().setProjectById(projectById.data.value?.projectsById)
    console.log('projectById.data.value.projectById :>> ', projectById)

    const status = await useAsyncQuery<any>(LIST_STATUS)
    useQueryStore().setStatus(status.data.value?.getStatus)

    const projectType = await useAsyncQuery<any>(LIST_PROJECT_TYPES)
    useQueryStore().setProjectType(projectType.data.value?.getProjectType)

    const getAllLog = await useAsyncQuery<any>(LIST_LOG_LOGIN)
    useLogLogin().setAllLogLogin(getAllLog.data.value?.getLogs)

    const getLogById = await useAsyncQuery<any>(LIST_LOG_LOGIN_BY_ID, { id: useProfile().userId })
    useLogLogin().setLogByUser(getLogById.data.value?.getLogById)

    const getAllBanner = await useAsyncQuery<any>(LIST_BANNER)
    useQueryStore().setBanner(getAllBanner.data.value?.banners)

    const getAllBlogNews = await useAsyncQuery<any>(LIST_BLOG_NEWS)
    useBlogNews().setBlogNews(getAllBlogNews.data.value?.blogNews)

    const getRoomByUserId = await useAsyncQuery<any>(LIST_ROOM_BY_USER_ID, { id: useProfile().userId })
    useQueryStore().setRoomByUserId(getRoomByUserId.data.value?.findMessageRoomByUserId)

    onResult()
  } catch (error) {
    onError(error)
  }
}

export default queryDatabase
