<template>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'

// type typeUsers = {
//     users: {
//     id: string,
//     name: string,
//     email: string,
//     password: string,
//     role: string,
//     avatar: string,
//     createAt: string,
//     updateAt: string,
//   }
// }
// const users = gql`
// query getUser{
//   users {
//     id
//     name
//     email
//     password
//     role
//     avatar
//     createAt
//     updateAt
//   }
// }`
// const getUsers = await useAsyncQuery<typeUsers>(users)
const data = await queryDatabase().getUsers()
console.log(await data)
</script>
