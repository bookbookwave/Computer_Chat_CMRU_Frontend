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
              <v-text-field v-model="data.nameTH" label="Full Thai Project name*" hint="Thai name" persistent-hint required />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field v-model="data.nameEN" label="Full English Project name*" hint="English name" persistent-hint required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="data.selectTeacher"
                :items="getTeacher"
                chips
                closable-chips
                :disabled="props2.textDialog === 'Edit'"
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                label="Select Teacher"
                multiple
                hint="Don't forget, add yourself*"
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :prepend-avatar="`${(item.raw.avatar as string).startsWith('http') ? 'https://picsum.photos/300/300': `${data.env}/images/${item.raw.avatar}` }`"
                    :text="item.raw.name"
                  />
                </template>

                <template #item="{ props, item }">
                  <v-list-item
                    hide-selected
                    :prepend-avatar="`${(item.raw.avatar as string).startsWith('http') ? 'https://picsum.photos/300/300': `${data.env}/images/${item.raw.avatar}` }`"
                    v-bind="props"
                    :title="item?.raw?.name"
                  />
                  <!-- <v-checkbox :label="item?.raw?.name" v-bind="props" /> -->
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="data.selectUser"
                :items="getUserNoProject()"
                chips
                closable-chips
                :disabled="props2.textDialog === 'Edit'"
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                label="Select Student"
                multiple
                hint="Don't forget, add yourself*"
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :prepend-avatar="`${(item.raw.avatar as string).startsWith('http') ? 'https://picsum.photos/300/300': `${data.env}/images/${item.raw.avatar}` }`"
                    :text="item.raw.name"
                  />
                </template>

                <template #item="{ props, item }">
                  <v-list-item
                    hide-selected
                    :prepend-avatar="`${(item.raw.avatar as string).startsWith('http') ? 'https://picsum.photos/300/300': `${data.env}/images/${item.raw.avatar}` }`"
                    v-bind="props"
                    :title="item?.raw?.name"
                    :subtitle="item?.raw?.credentialId"
                  />
                  <!-- <v-checkbox :label="item?.raw?.name" v-bind="props" /> -->
                </template>
              </v-autocomplete>
            </v-col>
            <!-- <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="data.status"
                :items="status"
                :value="data.status"
                :disabled="data.role === 'STUDENT'"
                color="blue-grey-lighten-2"
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
            </v-col> -->
            <v-col cols="12" sm="12">
              <v-autocomplete
                v-model="data.type"
                :items="types"
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                label="Project Type"
              >
                <template #item="{ props, item }">
                  <v-list-item
                    v-bind="props"
                    :title="item?.raw?.name"
                  />
                </template>
              </v-autocomplete>
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
  </v-no-ssr>
</template>

<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'

// enum Role {
//   ADMIN = 'ADMIN',
//   TEACHER = 'TEACHER',
//   STUDENT = 'STUDENT'
// }
const props2 = defineProps({
  textDialog: { type: String, default: '' },
  value: { type: Array, default: () => [] }
})
const data = reactive({
  dialog: false,
  rules: [
    (value: any) => {
      return !value || !value.length || value[0].size < 6000000 || 'Avatar size should be less than 6 MB!'
    }
  ],
  role: useProfile().role,
  id: '',
  name: '',
  nameTH: '',
  nameEN: '',
  selectUser: [],
  timeout: null,
  type: '',
  status: '',
  env: useRuntimeConfig().BACK_END_API_URL,
  selectTeacher: []
})
if (props2.value !== undefined) {
  data.id = props2.value.id
  data.nameTH = props2.value.nameTH
  data.nameEN = props2.value.nameEN
  data.status = props2.value.status?.name
  data.type = props2.value.projectType?.name
}
const users = await useQueryStore().users as any
const types = await useQueryStore().projectType as any
const status = await useQueryStore().status as any
const userNoProject = await useQueryStore().userNoProject as any
data.status = status[0].name

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const getUserNoProject = () => {
  return userNoProject.filter((val:any) => val.role === 'STUDENT')
}

// const getUser = () => {
//   const oldUser = users.filter((val:any) => val.role === 'STUDENT')
//   return oldUser
// }

const getTeacher = users.filter((val:any) => val.role === 'TEACHER' || val.role === 'ADMIN')

const onSubmit = () => {
  try {
    const newStatus = status.filter((val:any) => val.name === data.status)[0].id
    const newType = types.filter((val:any) => val.name === data.type)[0].id

    if (props2.textDialog === 'New') {
      mutationsDatabase().createProject({
        onResult: (res :any) => {
          const value = data.selectUser.map((userName :any) => {
            const newUser = users.find((val:any) => val.name === userName) as any
            return { userId: newUser.id, projectId: res.data.createProject?.id }
          })
          data.selectTeacher.map((teacher:any) => {
            const newTeacher = users.find((val:any) => val.name === teacher) as any
            return value.push({ userId: newTeacher.id, projectId: res.data.createProject?.id })
          })
          mutationsDatabase().createUserProject({
            onResult: () => {
              window.location.reload()
            },
            onError: () => {},
            value
          })
          data.dialog = false
          emit('dialogFalse')
        },
        onError: (error:Error) => {
          console.error('error :>> ', error)
        },
        value: { ...data, statusId: newStatus, typeId: newType }
      })
    } else {
      mutationsDatabase().updateProject({
        onResult: () => {
          window.location.reload()
          queryDatabase({})
          data.dialog = false
          emit('dialogFalse')
        },
        onError: () => {},
        value: { ...data, statusId: newStatus, typeId: newType }
      })
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
