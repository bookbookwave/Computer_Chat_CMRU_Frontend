<template>
  <div />
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'

if (useCookie('token').value === null) {
  useRouter().push('/login')
}

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
useHead({
  title: 'Loading ...',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})
</script>
