import { LIST_PROJECTS, LIST_PROJECT_BY_ID, LIST_PROJECT_TYPES, LIST_STATUS, LIST_USERS } from '~~/apollo/query'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
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
    // TODO : delete this ,It' useless
    await useAsyncQuery<any>(LIST_USERS)

    const users = await useAsyncQuery<any>(LIST_USERS)
    useQueryStore().setUser(users.data.value?.users)

    const project = await useAsyncQuery<any>(LIST_PROJECTS)
    useQueryStore().setProject(project.data.value?.projects)

    const projectById = await useAsyncQuery<any>(LIST_PROJECT_BY_ID, { id: useProfile().userId })
    useQueryStore().setProjectById(projectById.data.value?.projectsById)

    const status = await useAsyncQuery<any>(LIST_STATUS)
    useQueryStore().setStatus(status.data.value?.getStatus)

    const projectType = await useAsyncQuery<any>(LIST_PROJECT_TYPES)
    useQueryStore().setProjectType(projectType.data.value?.getProjectType)

    onResult()
  } catch (error) {
    onError(error)
  }
}

export default queryDatabase
