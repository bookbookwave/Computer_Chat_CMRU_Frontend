<template>
  <v-no-ssr>
    <v-card class="max-w-xl align-self-center">
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8" md="12">
              <v-text-field
                :model-value="props2.values.filename"
                prepend-icon="mdi-format-title"
                label="Title Filename"
                readonly
                variant="solo"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="4" md="12">
              <v-btn @click="openFile(props2.values.file)">
                Open File >>>
              </v-btn>
              <!-- <v-text-field
                model-value="Open File"
                readonly
                variant="solo"
                required
                @click="openFile(props2.values.file)"
              /> -->
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                variant="solo"
                :model-value="props2.values.status.name"
                prepend-icon="mdi-list-status"
                label="Status"
                readonly
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                variant="solo"
                :model-value="props2.values.createdAt"
                prepend-icon="mdi-calendar-range"
                label="Status"
                readonly
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea :model-value="props2.values.comment" readonly prepend-icon="mdi-comment" label="Comments" variant="outlined" />
            </v-col>
          </v-row>
        </v-container>
        <!-- <small>*PDF Only</small>
        <br>
        <small>*indicates required field</small> -->
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
          Close
        </v-btn>
        <!-- <v-btn color="blue-darken-1" variant="text" @click="onSubmit">
          Save
        </v-btn> -->
      </v-card-actions>
    </v-card>
    <!-- </v-dialog> -->
  </v-no-ssr>
</template>

<script lang="ts" setup>
import { useEnv } from '~~/store/environment'

const props2 = defineProps({
  textDialog: { type: String, default: '' },
  roomId: { type: String, default: '' },
  values: { type: Object, default: () => {} }
})
const data = reactive({
  url: useEnv().BACKEND_API_URL
})
const emit = defineEmits(['dialogFalse'])

const closeDialog = () => {
  emit('dialogFalse')
}
const openFile = (file :any) => {
  // window.open(file, '_blank')
  window.open(`${data.url}/files/${file}`, '_blank')
}
</script>
