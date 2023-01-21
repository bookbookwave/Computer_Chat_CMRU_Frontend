<template>
  <v-dialog v-model="data.dialog" persistent>
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props">
        {{ props2.textDialog }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="pa-5">
        <span class="text-h5">{{ title }}</span>
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
              <v-select v-model="data.role" :items="['ADMIN', 'TEACHER', 'USER']" label="Role" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-file-input
                :rules="data.rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                @change="avatarFile($event)"
              />
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue-darken-1" variant="text" @click="data.dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="onSubmit">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'

const data = reactive({
  dialog: false,
  rules: [
    (value: any) => {
      return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    }
  ],
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  avatar: []

})
const image = ref()
const avatarFile = (value:any) => {
  const file = { value: value.target.files[0] }
  const formData = new FormData()
  formData.append('file', file.value)
  console.log(formData)
  image.value = formData
  console.log('image.value :>> ', image.value)
}
const onSubmit = () => {
  const value = {
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    role: data.role,
    avatar: image.value
  }
  mutationsDatabase().createUser({
    onResult: () => {
      data.dialog = false
    },
    onError: () => {},
    value
  })
}
const props2 = defineProps({
  textDialog: { type: String, default: '' }
})
const title = props2.textDialog === 'Add User' ? 'Add User' : 'Edit User'
</script>
