<template>
  <v-no-ssr>
    <!-- <v-dialog v-model="data.dialog" persistent>
      <template #activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ props2.textDialog }}
        </v-btn>
      </template> -->
    <v-card>
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field v-model="data.name" label="Full name*" hint="example of persistent helper text" persistent-hint required />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="data.email" label="Email*" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="data.password" label="Password*" type="password" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="data.confirmPassword" label="Confirm Password*" type="password" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select v-model="data.role" :items="['ADMIN', 'TEACHER', 'STUDENT']" :disabled="data.role === 'STUDENT'" label="Role" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-file-input
                :rules="data.rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                @change="handleSelectAvatar($event)"
              />
            </v-col>
          </v-row>
        </v-container>
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
import queryDatabase from '~~/libs/query/queryDatabase'
import { useEnv } from '~~/store/environment'

enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}
const props2 = defineProps({
  textDialog: { type: String, default: '' },
  value: { type: Object, default: () => {} }
})
const data = reactive({
  dialog: false,
  rules: [
    (value: any) => {
      return !value || !value.length || value[0].size < 6000000 || 'Avatar size should be less than 6 MB!'
    }
  ],
  id: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: Role.STUDENT,
  avatar: ref(undefined)
})
if (props2.value !== undefined) {
  data.id = props2.value.id
  data.name = props2.value.name
  data.email = props2.value.email
  data.role = props2.value.role
}

const newAvatar = ref()
const handleSelectAvatar = (event:any) => {
  const file = event.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  newAvatar.value = formData
}

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const onSubmit = async () => {
  // if (data.role === 'STUDENT') {
  //   data.role = Role.STUDENT
  // }
  if (newAvatar.value !== undefined) {
    const res = await $fetch(`${useEnv().BACKEND_API_URL}/upload/image`,
      { method: 'POST', body: newAvatar.value })
    if (props2.textDialog === 'New') {
      mutationsDatabase().createUser({
        onResult: () => {
          window.location.reload()
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: { ...data, avatar: res }
      })
    } else {
      mutationsDatabase().updateUser({
        onResult: () => {
          window.location.reload()
          queryDatabase({})
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: { ...data, avatar: res }
      })
    }
  } else if (props2.textDialog === 'New') {
    mutationsDatabase().createUser({
      onResult: () => {
        window.location.reload()
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data, avatar: undefined }
    })
  } else {
    mutationsDatabase().updateUser({
      onResult: () => {
        window.location.reload()
        queryDatabase({})
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data, avatar: undefined }
    })
  }
}
</script>
