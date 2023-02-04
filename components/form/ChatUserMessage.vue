<template>
  <v-no-ssr>
    <v-card class="max-w-xl align-self-center">
      <v-card-title class="pa-5">
        <span class="text-h5">{{ props2.textDialog }}</span>
      </v-card-title>
      <v-card-text>
        <small>*Add Person who need to message</small>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-autocomplete
                v-model="data.selectUser"
                :items="users"
                :disabled="props2.textDialog === 'Edit'"
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                label="Select Person"
                hint="Don't forget, add yourself*"
              >
                <template #item="{ props, item }">
                  <v-list-item
                    hide-selected
                    :prepend-avatar="`${(item.raw.avatar as string).startsWith('http') ? 'https://picsum.photos/300/300': `http://localhost:3000/images/${item.raw.avatar}` }`"
                    v-bind="props"
                    :title="item?.raw?.name"
                  />
                  <!-- <v-checkbox :label="item?.raw?.name" v-bind="props" /> -->
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
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'

const props2 = defineProps({
  textDialog: { type: String, default: '' },
  value: { type: Array, default: () => [] }
})

const data = reactive({
  dialog: false,
  userId: useProfile().userId,
  selectUser: ''
})
const users = await useQueryStore().users as any

const emit = defineEmits(['dialogFalse'])
const closeDialog = () => {
  emit('dialogFalse')
}

const onSubmit = () => {
  mutationsDatabase().createMessageRoom({
    onResult: (res:any) => {
      try {
        const newUser = users.find((val:any) => val.name === data.selectUser) as any
        const value = [
          {
            userId: useProfile().userId,
            messageRoomId: res.data.createMessageRoom?.id
          },
          {
            userId: newUser.id,
            messageRoomId: res.data.createMessageRoom?.id
          }
        ]

        mutationsDatabase().createManyUserMessageRoom({
          onResult: (res:any) => {
            console.log('res :>> ', res)
            window.location.reload()
            data.dialog = false
            emit('dialogFalse')
          },
          onError: () => {},
          value: { data: value }
        })
      } catch (error) {
        console.log('error :>> ', error)
      }
    },
    onError: () => {}
  })
}
</script>
