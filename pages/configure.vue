<template>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'
import { useCounter } from '~~/store/queryData'

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
  }
}
const users = gql`
query getUser{
  users {
    id
    name
    email
    password
    role
    avatar
    createAt
    updateAt
  }
}`
// const getUsers = await queryDatabase().getUsers()
// if (getUsers.data.value?.users) {
//   console.log('aaa', getUsers.data.value)
// }
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
const data = await useCounter().users
console.log(await data)
</script>
