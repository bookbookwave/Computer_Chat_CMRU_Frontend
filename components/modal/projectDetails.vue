<template>
  <v-no-ssr>
    <v-card class="max-w-xl align-self-center">
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :model-value="props2.values.nameTH"
                prepend-icon="mdi-format-title"
                label="Title NameTH"
                readonly
                variant="solo"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :model-value="props2.values.nameEN"
                prepend-icon="mdi-format-title"
                label="Title NameEN"
                readonly
                variant="solo"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                variant="solo"
                :model-value="props2.values.status.name"
                prepend-icon="mdi-list-status"
                label="Project Progress"
                readonly
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                variant="solo"
                :model-value="props2.values.projectType.name"
                prepend-icon="mdi-format-list-checkbox"
                label="Project Type"
                readonly
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea :model-value="data.userProject" readonly prepend-icon="mdi-account" label="Person Of Project" variant="outlined" />
            </v-col>
            <v-col v-if="data.fileUpload.length" cols="12" sm="12" md="12">
              <v-list density="compact" nav>
                <div>
                  File Upload
                </div>
                <br>
                <v-no-ssr>
                  <v-dialog v-model="data.fileDetails">
                    <template #activator="{ props }">
                      <v-list-item
                        v-for="(item, i) in data.fileUpload"
                        v-bind="props"
                        :key="i"
                        prepend-icon="mdi-file-pdf-box"
                        :title="item.filename"
                        :subtitle="item.createdAt"
                        :value="i"
                        @click="getDetails(item)"
                      />
                    </template>
                    <modal-file-upload-details text-dialog="File Detail" :values="data.useDetails" @dialog-false="data.fileDetails = !data.fileDetails" />
                  </v-dialog>
                </v-no-ssr>
              </v-list>
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
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import { useEnv } from '~~/store/environment'

type FileUpload = {
  filename: string,
  file: string,
  createdAt : string,
  comment: string,
  status: {
    name: string,
  }
}

const props2 = defineProps({
  textDialog: { type: String, default: '' },
  roomId: { type: String, default: '' },
  values: { type: Object, default: () => {} }
})

const data = reactive({
  url: useEnv().BACKEND_API_URL,
  fileUpload: ref<FileUpload[]>([]),
  fileDetails: false,
  useDetails: [],
  userProject: []
})

onBeforeMount(() => {
  mutationsDatabase().getFileByProjectId({
    onResult: (item:any) => {
      item.map((file: any) =>
        data.fileUpload.unshift(
          {
            filename: file.fileName,
            file: file.file,
            createdAt: new Date(file.createdAt).toLocaleDateString(),
            status: file.status,
            comment: file.comment
          }
        )
      )
    },
    onError: (error:Error) => { console.error(error) },
    value: props2.values.id
  })
})

mutationsDatabase().getUserProject({
  onResult: (item:any) => {
    data.userProject = item.map((user:any) => `${user.user.name} (${user.user.credentialId})\n`)
    // console.log(item)
  },
  onError: (error:Error) => { console.error(error) },
  value: props2.values.id
})

const getDetails = (items:any) => {
  data.useDetails = items
}

const emit = defineEmits(['dialogFalse'])

const closeDialog = () => {
  data.fileUpload = []
  emit('dialogFalse')
}

const openFile = (file :any) => {
  // window.open(file, '_blank')
  window.open(`${data.url}/files/${file}`, '_blank')
}
</script>
