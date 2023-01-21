<template>
  <div class="overflow-auto">
    <ContainerConfigTable :items="getUsers" :headers="data.headers" title="User" text-button="Add User" />
  </div>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase';
import { useCounter } from '~~/store/queryData'
import { User } from '~~/types/graphql'

const data = reactive({
  getUsers: Array<User>,
  search: '',
  headers: [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Password', key: 'password' },
    { title: 'Role', key: 'role' },
    { title: 'Avatar', key: 'avatar' },
    { title: 'CreateAt', key: 'createAt' },
    { title: 'updateAt', key: 'updateAt' }
  ]

})
// type typeUsers = {
//   users: {
//     id: string,
//     name: string,
//     email: string,
//     password: string,
//     role: string,
//     avatar: string,
//     createAt: string,
//     updateAt: string,
//   }[]
// }
// const users = gql`#prepend
//   query getUser{
//     users {
//       id
//       name
//       email
//       password
//       role
//       avatar
//       createAt
//       updateAt
//     }
//   }`
// watch(data.getUsers, (val: any) => data.getUsers = val)
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
const getUsers = useCounter().users

</script>
