<template>
  <div />
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'
await queryDatabase({
  onResult: () => {
    useRouter().push('/welcome')
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
definePageMeta({
  layout: 'loading'
})
</script>
