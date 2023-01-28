<template>
  <div>
    <v-no-ssr>
      <v-row justify="center">
        <v-dialog
          v-model="data.dialog"
          persistent
          class="flex align-center justify-center max-w-md"
        >
          <template #activator="{ props }">
            <v-btn

              v-bind="props"
            >
              Register
            </v-btn>
          </template>
          <v-card class="flex align-center">
            <v-card-title class="mt-2 mb-n2">
              <span class="text-h5">Register</span>
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
                  <v-col cols="12" sm="12">
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
            <v-dialog
              v-model="data.alertBox"
              class="flex align-center justify-center max-w-sm"
            >
              <v-card class="max-w-sm">
                <v-card-text>
                  {{ data.alertText }}
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="data.dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                :loading="data.isLoading"
                @click="onSubmit"
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import { useEnv } from '~~/store/environment'

const data = reactive({
  dialog: false,
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  avatar: ref(),
  rules: [
    (value: any) => {
      return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    }
  ],
  alertBox: false,
  isLoading: false,
  alertText: ''
})
const newAvatar = ref()
const handleSelectAvatar = (event:any) => {
  const file = event.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  newAvatar.value = formData
}
const onSubmit = async () => {
  const res = await $fetch(`${useEnv().BACKEND_API_URL}/upload/image`,
    { method: 'POST', body: newAvatar.value })
  data.isLoading = true
  if (res) {
    mutationsDatabase().register({
      onResult: () => {
        data.alertText = 'Register Successfully'
        data.alertBox = true
        setTimeout(() => {
          data.alertBox = false
          data.dialog = false
        }, 4000)
      },
      onError: () => {
        data.alertText = 'Error!!! Register , Something is wrong'
        data.alertBox = true
        setTimeout(() => {
          data.alertBox = false
          data.dialog = false
        }, 4000)
      },
      value: { ...data, avatar: res }
    })
  }
}
</script>
