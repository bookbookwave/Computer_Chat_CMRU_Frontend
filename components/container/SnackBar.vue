<template>
  <div>
    <v-snackbar
      v-model="data.snackbar"
    >
      {{ data.text }}

      <template #actions>
        <v-btn
          color="pink"
          variant="text"
          @click="data.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts" setup>
const data = reactive({
  snackbar: true,
  text: 'Hello'
})
</script>
