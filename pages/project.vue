<template>
  <v-container>
    <div>
      <table-project-table />
    </div>
  </v-container>
</template>
<script lang="ts" setup>

if (useCookie('token').value === null) {
  useRouter().push('/login')
}

useHead({
  title: 'Project',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})
</script>
