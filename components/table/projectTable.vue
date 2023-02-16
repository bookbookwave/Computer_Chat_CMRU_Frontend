<template>
  <div>
    <v-no-ssr>
      <v-data-table :headers="data.headers" :items="projects" class="elevation-1" :search="data.search">
        <template #top>
          <v-toolbar flat>
            <div class="grid grid-cols-3 md:grid-cols-6 min-w-full min-h-full align-center">
              <v-toolbar-title class="relative col-start-1 text-center">
                Project
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <div v-if="data.role === 'TEACHER' || data.role === 'ADMIN'" class="relative col-start-3 md:col-start-6">
                <v-no-ssr>
                  <v-dialog v-model="data.dialog" persistent>
                    <template #activator="{ props }">
                      <v-btn color="primary" v-bind="props">
                        Add Project
                      </v-btn>
                    </template>
                    <form-project-form-dialog :value="data.sentEditData" :text-dialog="data.dialogTitle" @dialog-false="closeDialog" />
                  </v-dialog>
                </v-no-ssr>
              </div>
              <div v-if="data.role === 'STUDENT'" class="relative col-start-3 md:col-start-6">
                <v-no-ssr v-if="projects.length === 0 ">
                  <v-dialog v-model="data.dialog" persistent>
                    <template #activator="{ props }">
                      <v-btn color="primary" v-bind="props">
                        Add Project
                      </v-btn>
                    </template>
                    <form-project-form-dialog :value="data.sentEditData" :text-dialog="data.dialogTitle" @dialog-false="closeDialog" />
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
        <template #[`item.nameEN`]="{ item }">
          <v-no-ssr>
            <v-dialog v-model="data.isDetails" persistent>
              <template #activator="{ props }">
                <v-list-item color="primary" v-bind="props" @click="onOpenDetails(item.raw)">
                  {{ item.raw.nameEN }}
                </v-list-item>
              </template>
              <modal-project-details :values="data.details" text-dialog="Project Details" @dialog-false="closeDialog" />
            </v-dialog>
          </v-no-ssr>
        </template>
        <!-- <template #[`item.nameTH`]="{ item }">
          <v-no-ssr>
            <v-dialog v-model="data.isDetails" persistent>
              <template #activator="{ props }">
                <v-list-item color="primary" v-bind="props" @click="onOpenDetails(item.raw)">
                  {{ item.raw.nameTH }}
                </v-list-item>
              </template>
              <modal-project-details :values="data.details" text-dialog="Project Details" @dialog-false="closeDialog" />
            </v-dialog>
          </v-no-ssr>
        </template> -->
      </v-data-table>
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
const data = reactive({
  dialog: false,
  dialogDelete: false,
  loading: true,
  search: '',
  headers: [
    { title: 'NameEN', key: 'nameEN', sortable: true },
    { title: 'NameTH', key: 'nameTH', sortable: true },
    { title: 'Progress', key: 'status.name', sortable: true },
    { title: 'Types', key: 'projectType.name', sortable: true }
    // { title: 'CreateAt', key: 'createdAt' }
    // { title: 'updateAt', key: 'updatedAt' }

  ],
  role: useProfile().role,
  editedIndex: -1,
  deleteIndex: '',
  dialogTitle: 'New',
  sentEditData: [],
  isDetails: false,
  details: []
})

if (useProfile().role === 'ADMIN' || useProfile().role === 'TEACHER') {
  data.headers.push({ title: 'Actions', key: 'actions', sortable: false })
}
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
  // data.details = []
  data.dialog = false
  data.editedIndex = -1
  data.isDetails = false
}

const onOpenDetails = (item:any) => {
  data.details = item
}

const projects = await useQueryStore().projectById

projects!.forEach((item: any) => {
  item.createdAt = new Date(item.createdAt).toLocaleString()
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
  mutationsDatabase().deleteProject({
    onResult: () => {},
    onError: (error : Error) => { console.error(error) },
    value: { id: data.deleteIndex }
  })
    projects!.splice(data.editedIndex, 1)
    closeDelete()
}

const closeDelete = () => {
  data.dialogDelete = false
}

const getColor = (role: any) => {
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}
</script>
