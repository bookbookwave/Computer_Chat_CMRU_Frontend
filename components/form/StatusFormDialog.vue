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
              <v-text-field v-model="data.name" label="Full Status Name*" hint="example of persistent helper text" persistent-hint required />
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

const props2 = defineProps({
  textDialog: { type: String, default: '' },
  value: { type: Array, default: () => [] }
})
const data = reactive({
  dialog: false,
  id: '',
  name: ''
})
if (props2.value !== undefined) {
  data.id = props2.value.id
  data.name = props2.value.name
}

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const onSubmit = () => {
  // if (data.role === 'USER') {
  //   data.role = Role.USER
  // }
  if (props2.textDialog === 'New') {
    mutationsDatabase().createStatus({
      onResult: () => {
        window.location.reload()
        data.dialog = false
        emit('dialogFalse')
      },
      onError: () => {},
      value: { ...data, avatar: undefined }
    })
  } else {
    mutationsDatabase().updateStatus({
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
