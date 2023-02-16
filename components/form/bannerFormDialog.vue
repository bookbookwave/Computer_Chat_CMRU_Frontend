<template>
  <v-no-ssr>
    <v-card>
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="data.title"
                prepend-icon="mdi-format-title"
                label="Banner Name*"
                hint="Banner name"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="data.link"
                prepend-icon="mdi-link"
                label="Link to use with Banner*"
                hint="Link with http:// or https://"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-file-input
                :rules="data.rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an Image"
                prepend-icon="mdi-camera"
                label="Image"
                @change="handleSelectAvatar($event)"
              />
            </v-col>
          </v-row>
        </v-container>
        <small>*Image Resolution limit by 1280 x 360 / 21:6</small>
        <br>
        <small>1300 x 400</small>
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
    <!-- {{ props2.value }} -->
  </v-no-ssr>
</template>

<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useEnv } from '~~/store/environment'

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
  title: '',
  image: '',
  link: '',
  selectUser: [],
  timeout: null
})

if (props2.value !== undefined) {
  data.id = props2.value.id
  data.title = props2.value.title
  data.image = props2.value.image
  data.link = props2.value.link
}

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}
const newImage = ref()
const handleSelectAvatar = (event:any) => {
  const file = event.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  newImage.value = formData
}

const onSubmit = async () => {
  if (newImage.value !== undefined) {
    const res = await $fetch(`${useEnv().BACKEND_API_URL}/upload/image`,
      { method: 'POST', body: newImage.value })
    if (props2.textDialog === 'New') {
      mutationsDatabase().createBanner({
        onResult: () => {
          window.location.reload()
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: { ...data, image: res }
      })
    } else {
      mutationsDatabase().updateBanner({
        onResult: () => {
          window.location.reload()
          queryDatabase({})
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: { ...data, image: res }
      })
    }
  } else if (props2.textDialog === 'New') {
    mutationsDatabase().createBanner({
      onResult: () => {
        window.location.reload()
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data, image: undefined }
    })
  } else {
    mutationsDatabase().updateBanner({
      onResult: () => {
        window.location.reload()
        queryDatabase({})
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data, image: undefined }
    })
  }
}
</script>
