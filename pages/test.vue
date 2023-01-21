<template>
  <!-- <div v-if="data.loading" /> -->
  <div>
    <v-data-table :headers="data.headers" :items="users" class="elevation-1" :search="data.search">
      <template #top>
        <v-toolbar flat>
          <div class="grid grid-cols-3 md:grid-cols-6 min-w-full min-h-full align-center">
            <v-toolbar-title class="relative col-start-1 text-center">
              Users
            </v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            />
            <div class="relative col-start-3 md:col-start-6">
              <button-form-dialog-button text-dialog="Add User" />
            </div>
          </div>
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
  </div>
</template>
<script lang="ts" setup>import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useCounter } from '~~/store/queryData'

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
  editedIndex: -1
})
const users = await useCounter().users

const formTitle = data.editedIndex === -1 ? 'New Item' : 'Edit Item'

watch(() => data.dialog, (val: any) => val || close())
watch(() => data.dialogDelete, (val: any) => val || close())

const editItem = (item: any) => {
  data.editedIndex = users!.indexOf(item)
  data.editedItem = Object.assign({}, item)
  data.dialog = true
}

const deleteItem = (item: any) => {
  console.log(item)
  data.editedIndex = users!.indexOf(item)
  data.editedItem = Object.assign({}, item)
  data.dialogDelete = true
}

const deleteItemConfirm = () => {
  users!.splice(data.editedIndex, 1)
  closeDelete()
}

const close = () => {
  data.dialog = false
  nextTick(() => {
    data.editedItem = Object.assign({}, data.defaultItem)
    data.editedIndex = -1
  })
}

const closeDelete = () => {
  data.dialogDelete = false
  nextTick(() => {
    data.editedItem = Object.assign({}, data.defaultItem)
    data.editedIndex = -1
  })
}

const save = () => {
  if (data.editedIndex > -1) {
    Object.assign(users![data.editedIndex], data.editedItem)
  } else {
    users!.push(data.editedItem)
  }
  close()
}
const getColor = (role: any) => {
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}
</script>
