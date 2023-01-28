<template>
  <div>
    <v-no-ssr>
      <table-user-table />
      <table-status-table />
      <table-project-type-table />
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>import { useProfile } from '~~/store/profile'

if (useProfile().role === 'USER') {
  useRouter().push('/welcome')
}
</script>
