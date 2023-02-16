<template>
  <div>
    <v-no-ssr>
      <v-data-table :headers="data.headers" :items="users" class="elevation-1" :search="data.search">
        <template #top>
          <v-toolbar flat>
            <div class="grid grid-cols-3 md:grid-cols-6 min-w-full min-h-full align-center">
              <v-toolbar-title class="relative col-start-1 text-center font-weight-bold text-h5">
                Users
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <div class="relative col-start-3 md:col-start-6">
                <!-- <form-dialog-create-user text-dialog="Add User" /> -->
                <v-no-ssr>
                  <v-dialog v-model="data.dialog" persistent>
                    <template #activator="{ props }">
                      <v-btn color="primary" v-bind="props" prepend-icon="mdi-plus" rounded class="text-h6 font-weight-bold">
                        User
                      </v-btn>
                    </template>
                    <form-dialog-create-user :value="data.sentEditData" :text-dialog="data.dialogTitle" @dialog-false="closeDialog" />
                  </v-dialog>
                </v-no-ssr>
              </div>
            </div>
            <v-no-ssr>
              <v-dialog v-model="data.dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="d-flex justify-center text-subtitle-2 font-Kanit">
                    Are you sure you want to
                    <div class="text-red mx-1">
                      delete
                    </div>
                    this item?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">
                      Cancel
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">
                      OK
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-no-ssr>
          </v-toolbar>
          <v-text-field
            v-model="data.search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="px-4"
          />
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon size="small" color="yellow" class="mr-2" @click="editItem(item.raw)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" color="red" @click="deleteItem(item.raw)">
            mdi-delete
          </v-icon>
        </template>
        <template #no-data>
          <div class="flex justify-center">
            no data
          </div>
        </template>
        <template #[`item.role`]="{ item }">
          <v-chip :color="getColor(item.raw.role)">
            {{ item.raw.role }}
          </v-chip>
        </template>
      </v-data-table>
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
if (useProfile().role === 'STUDENT') {
  useRouter().push('/welcome')
}
const data = reactive({
  dialog: false,
  dialogDelete: false,
  loading: true,
  search: '',
  headers: [
    { title: 'Name', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Role', key: 'role' },
    { title: 'Avatar', key: 'avatar' },
    { title: 'CreateAt', key: 'createAt' },
    { title: 'updateAt', key: 'updateAt' },
    { title: 'Actions', key: 'actions', sortable: false }
  ],
  editedIndex: -1,
  deleteIndex: '',
  dialogTitle: 'New',
  sentEditData: []
})
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
const closeDialog = () => {
  data.dialogTitle = 'New'
  data.sentEditData = []
  data.dialog = false
  data.editedIndex = -1
}
const users = await useQueryStore().users

users.forEach((user:any) => {
  user.createAt = new Date(user.createAt).toLocaleDateString()
  user.updateAt = new Date(user.updateAt).toLocaleDateString()
})

const editItem = (item: any) => {
  data.dialogTitle = 'Edit'
  data.editedIndex = 0
  data.sentEditData = item
  data.dialog = true
}

const deleteItem = (item: any) => {
  data.deleteIndex = item.id
  data.dialogDelete = true
}

const deleteItemConfirm = () => {
  mutationsDatabase().deleteUser({ onResult: () => { }, value: data.deleteIndex })
    users!.splice(data.editedIndex, 1)
    closeDelete()
}

const closeDelete = () => {
  data.dialogDelete = false
}

const getColor = (role: any) => {
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}
</script>
