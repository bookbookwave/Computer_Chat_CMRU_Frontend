import { CREATE_FILE, CREATE_PROJECT, CREATE_PROJECT_TYPES, CREATE_STATUS, CREATE_USER, CREATE_USER_PROJECT, DELETE_PROJECT, DELETE_PROJECT_TYPES, DELETE_STATUS, DELETE_USER, LOGIN, REGISTER, UPDATE_PROJECT, UPDATE_PROJECT_TYPES, UPDATE_STATUS, UPDATE_USER } from '~~/apollo/mutation'
import { LIST_FILE_UPLOAD_BY_PROJECT_ID, LIST_MESSAGES_BY_PROJECT_ID } from '~~/apollo/query'
import { useFileUpload } from '~~/store/fileUpload'
import { useMessage } from '~~/store/message'

const mutationsDatabase = () => {
  const login = async ({ onResult, onError, value }:any) => {
    try {
      const data = await useMutation(LOGIN).mutate(value)
      useCookie('token').value = JSON.stringify(data)
      onResult(data)
    } catch (error) {
      onError(error)
    }
  }
  const register = async ({ onResult, onError, value }:any) => {
    try {
      const data = await useMutation(REGISTER).mutate(value)
      onResult(data)
    } catch (error) {
      onError(error)
    }
  }
  const createUser = async ({ onResult, onError, value }:any) => {
    try {
      const data = await useMutation(CREATE_USER).mutate(value)
      onResult(data)
    } catch (error) {
      onError(error)
    }
  }
  const updateUser = async (
    { onResult, onError, value }:any
  ) => {
    try {
      const data = await useMutation(UPDATE_USER).mutate(value)
      onResult(data)
    } catch (error) {
      onError(error)
    }
  }
  const deleteUser = async ({ onResult, onError, value }:any) => {
    try {
      const variables = {
        id: value
      }
      const res = await useMutation(DELETE_USER).mutate(variables)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const createStatus = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(CREATE_STATUS).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const updateStatus = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(UPDATE_STATUS).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const deleteStatus = async ({ onResult, onError, value }:any) => {
    try {
      const variables = {
        id: value
      }
      const res = await useMutation(DELETE_STATUS).mutate(variables)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const createProjectTypes = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(CREATE_PROJECT_TYPES).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const updateProjectTypes = async ({ onResult, onError, value }:any) => {
    try {
      console.log('value :>> ', value)
      const res = await useMutation(UPDATE_PROJECT_TYPES).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const deleteProjectTypes = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(DELETE_PROJECT_TYPES).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const createProject = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(CREATE_PROJECT).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const updateProject = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(UPDATE_PROJECT).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const deleteProject = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(DELETE_PROJECT).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const createUserProject = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(CREATE_USER_PROJECT).mutate({ data: value })
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const getMessageByProject = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useAsyncQuery<any>(LIST_MESSAGES_BY_PROJECT_ID, { id: value })
      useMessage().setMessage(res.data.value?.messagesByProject)
      onResult(res.data.value?.messagesByProject)
    } catch (error) {
      onError(error)
    }
  }
  const createFile = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useMutation(CREATE_FILE).mutate(value)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  const getFileByProjectId = async ({ onResult, onError, value }:any) => {
    try {
      const res = await useAsyncQuery<any>(LIST_FILE_UPLOAD_BY_PROJECT_ID, { id: value })
      useFileUpload().setFile(res.data.value?.getFilesById)
      onResult(res.data.value?.getFilesById)
    } catch (error) {
      onError(error)
    }
  }

  return {
    login,
    register,

    createUser,
    updateUser,
    deleteUser,

    createStatus,
    updateStatus,
    deleteStatus,

    createProjectTypes,
    updateProjectTypes,
    deleteProjectTypes,

    createProject,
    updateProject,
    deleteProject,

    createUserProject,

    getMessageByProject,

    createFile,

    getFileByProjectId
  }
}
export default mutationsDatabase
