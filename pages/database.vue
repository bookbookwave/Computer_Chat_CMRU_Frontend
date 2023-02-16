<template>
  <div>
    <v-no-ssr>
      <v-container>
        <table-user-table />
        <table-status-table />
        <table-project-type-table />
      </v-container>
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>import { useProfile } from '~~/store/profile'

if (useCookie('token').value === null) {
  useRouter().push('/login')
}

if (useProfile().role === 'STUDENT') {
  useRouter().push('/welcome')
}
useHead({
  title: 'DATABASE ISTUDY',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})
</script>
