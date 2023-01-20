<template>
  <div class="overflow-auto">
    <div>
      <v-card>
        <v-card-title>
          <div class="flex justify-between">
            {{ props.title }}
            <v-btn>{{ props.textButton }}</v-btn>
          </div>
          <v-spacer />
          <v-text-field
            v-model="data.search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="props.headers"
          :items="props.items"
          :search="data.search"
        />
      </v-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  items: { type: Array, default: () => [] },
  headers: { type: Array, default: () => [] },
  title: { type: String, default: '' },
  textButton: { type: String, default: '' }
})
const data = reactive({
  search: ''
})
</script>
