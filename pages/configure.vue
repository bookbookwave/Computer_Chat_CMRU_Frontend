<template>
  <v-container>
    <div>
      <table-banner-table />
      <table-blog-news-table />
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'
import { useProfile } from '~~/store/profile'

if (useCookie('token').value === null) {
  useRouter().push('/login')
}

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
useHead({
  title: 'Configure',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})
</script>
