import { LIST_USERS } from "~~/apollo/query"
import { useCounter } from "~~/store/queryData"

const queryDatabase = async ({onResult,onError}:any) => {
  try {
    type typeUsers = {
      users: {
        id: string,
        name: string,
        email: string,
        password: string,
        role: string,
        avatar: string,
        createAt: string,
        updateAt: string,
      }[]
    }

    const data = await useAsyncQuery<any>(LIST_USERS)
    useCounter().setUser(data.data.value?.users)
    onResult()
  } catch (error) {
    onError(error)
  }
  }

export default queryDatabase
