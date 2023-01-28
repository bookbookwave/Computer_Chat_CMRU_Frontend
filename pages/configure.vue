<template>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
if (useProfile().role === 'USER' || useProfile().role === 'TEACHER') {
  useRouter().push('/welcome')
}
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
const data = await useQueryStore().users
</script>
