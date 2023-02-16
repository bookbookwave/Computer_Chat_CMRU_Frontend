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
                label="Title Name*"
                hint="Title name"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="data.link"
                prepend-icon="mdi-link"
                label="Full Link with http:// or https://*"
                hint="Link with http:// or https://"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea v-model="data.content" prepend-icon="mdi-comment" label="Content Details" variant="outlined" />
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
    <!-- {{ props2.value }} -->
  </v-no-ssr>
</template>

<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'

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
  content: '',
  link: '',
  selectUser: [],
  timeout: null
})

if (props2.value !== undefined) {
  data.id = props2.value.id
  data.title = props2.value.title
  data.content = props2.value.content
  data.link = props2.value.link
}

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const onSubmit = () => {
  if (props2.textDialog === 'New') {
    mutationsDatabase().createBlogNews({
      onResult: () => {
        window.location.reload()
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data }
    })
  } else {
    mutationsDatabase().updateBlogNews({
      onResult: () => {
        window.location.reload()
        queryDatabase({})
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data }
    })
  }
}
</script>
