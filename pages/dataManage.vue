<template>
  <div class="overflow-auto">
    <ContainerConfigTable :items="data.getUsers" :headers="data.headers" title="User" text-button="Add User" />
  </div>
</template>
<script lang="ts" setup>
import { User } from '~~/types/graphql';


const data = reactive({
  getUsers: [],
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
const users = gql`#prepend
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
watch(data.getUsers, (val: any) => data.getUsers = val)
data.getUsers = await useAsyncQuery<any>(users).data.value?.users

</script>
