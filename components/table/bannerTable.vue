<template>
  <div>
    <v-no-ssr>
      <v-data-table :headers="data.headers" :items="banner" class="elevation-1" :search="data.search">
        <template #top>
          <v-toolbar flat>
            <div class="grid grid-cols-3 md:grid-cols-6 min-w-full min-h-full align-center">
              <v-toolbar-title class="relative col-start-1 text-center">
                Banner
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <div class="relative col-start-3 md:col-start-6">
                <v-no-ssr>
                  <v-dialog v-model="data.dialog" persistent>
                    <template #activator="{ props }">
                      <v-btn color="primary" v-bind="props">
                        Add Banner
                      </v-btn>
                    </template>
                    <form-banner-form-dialog :value="data.sentEditData" :text-dialog="data.dialogTitle" @dialog-false="closeDialog" />
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
      </v-data-table>
    </v-no-ssr>
  </div>
</template>
<script lang="ts" setup>
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import queryDatabase from '~~/libs/query/queryDatabase'
import { useQueryStore } from '~~/store/queryData'

const data = reactive({
  dialog: false,
  dialogDelete: false,
  loading: true,
  search: '',
  headers: [
    { title: 'Title', key: 'title', sortable: true },
    { title: 'Link', key: 'link', sortable: true },
    { title: 'image', key: 'image', sortable: true },
    { title: 'Actions', key: 'actions', sortable: false }
    // { title: 'CreateAt', key: 'createdAt' }
    // { title: 'updateAt', key: 'updatedAt' }

  ],
  editedIndex: -1,
  deleteIndex: '',
  dialogTitle: 'New',
  sentEditData: [],
  isDetails: false,
  details: []
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
  // data.details = []
  data.dialog = false
  data.editedIndex = -1
  data.isDetails = false
}

const banner = await useQueryStore().banner

banner!.forEach((item: any) => {
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
  mutationsDatabase().deleteBanner({
    onResult: (res:any) => {
      console.log('res', res)
    },
    onError: () => {},
    value: { id: data.deleteIndex }
  })
  banner!.splice(data.editedIndex, 1)
  closeDelete()
}

const closeDelete = () => {
  data.dialogDelete = false
}

</script>
