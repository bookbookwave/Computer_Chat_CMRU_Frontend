<template>
  <v-no-ssr>
    <!-- <v-dialog v-model="data.dialog" persistent>
        <template #activator="{ props }">
          <v-btn color="primary" v-bind="props">
            {{ props2.textDialog }}
          </v-btn>
        </template> -->
    <v-card class="max-w-xl align-self-center">
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="data.filename"
                prepend-icon="mdi-format-title"
                label="Title File*"
                hint="Make you know, What about this file"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12">
              <v-file-input
                :rules="data.rules"
                accept="application/pdf"
                placeholder="Pick a file"
                prepend-icon="mdi-attachment"
                label="Pick File"
                @change="handleSelectFile($event)"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <v-autocomplete
                v-model="data.status"
                :items="status"
                :value="data.status"
                color="blue-grey-lighten-2"
                prepend-icon="mdi-list-status"
                item-title="name"
                item-value="name"
                label="Project Status"
              >
                <template #item="{ props, item }">
                  <v-list-item
                    v-bind="props"
                    :title="item?.raw?.name"
                  />
                </template>
              </v-autocomplete>
            </v-col>
            <v-container fluid>
              <v-textarea
                v-model="data.comment"
                label="comment"
                auto-grow
                prepend-icon="mdi-comment"
                clearable
                variant="outlined"
                rows="3"
                row-height="25"
                shaped
              />
            </v-container>
          </v-row>
        </v-container>
        <small>*PDF Only</small>
        <br>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="onSubmit">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-dialog> -->
  </v-no-ssr>
</template>

<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import { useEnv } from '~~/store/environment'
import { useQueryStore } from '~~/store/queryData'

enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  USER = 'USER'
}
const props2 = defineProps({
  textDialog: { type: String, default: '' },
  roomId: { type: String, default: '' },
  messageRoomId: { type: String, default: '' }
})
const data = reactive({
  dialog: false,
  rules: [
    (value: any) => {
      return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    }
  ],
  projectId: '',
  filename: '',
  comment: '',
  role: Role.USER,
  status: '',
  avatar: ref(undefined),
  messageRoom: ''
})
if (props2.roomId !== '' || props2.messageRoomId !== '') {
  data.projectId = props2.roomId
  data.messageRoom = props2.messageRoomId
}

const status = await useQueryStore().status as any

const newFile = ref()
const handleSelectFile = (event:any) => {
  const file = event.target.files[0]
  const formData = new FormData()
  formData.append('file', file)
  newFile.value = formData
  console.log('newFile.value :>> ', newFile.value)
}

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const onSubmit = async () => {
  console.log('data :>> ', data)
  const newStatus = status.filter((val:any) => val.name === data.status)[0].id
  // if (data.role === 'USER') {
  //   data.role = Role.USER
  // }
  if (newFile.value !== undefined) {
    const res = await $fetch(`${useEnv().BACKEND_API_URL}/upload/file`,
      { method: 'POST', body: newFile.value })
    if (props2.textDialog === 'Upload File') {
      mutationsDatabase().createFile({
        onResult: () => {
          window.location.reload()
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: {
          ...data,
          file: res,
          statusId: newStatus,
          projectId: data.projectId === '' ? undefined : data.projectId,
          messageRoom: data.messageRoom === '' ? undefined : data.messageRoom
        }
      })
    }
    // else {
    //   mutationsDatabase().updateUser({
    //     onResult: () => {
    //       window.location.reload()
    //       queryDatabase({})
    //       data.dialog = false
    //       emit('dialogFalse')
    //     },
    //     onError: () => {},
    //     value: { ...data, file: res, statusId: newStatus }
    //   })
    // }
  }
}
</script>
