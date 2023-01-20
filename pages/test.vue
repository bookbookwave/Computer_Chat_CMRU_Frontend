<template>
  <!-- <div v-if="data.loading" /> -->
  <div>
    <v-data-table
      :headers="data.headers"
      :items="getUsers"
      class="elevation-1"
      :search="data.search"
    >
      <template #top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <button-form-dialog-button text-dialog="Add User" />
          <!-- <v-dialog
            v-model="data.dialog"
            max-width="500px"
          >
            <template #activator="{ props }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="props"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="data.editedItem.name"
                        label="Dessert name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="data.editedItem.calories"
                        label="Calories"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="data.editedItem.fat"
                        label="Fat (g)"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="data.editedItem.carbs"
                        label="Carbs (g)"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="data.editedItem.protein"
                        label="Protein (g)"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="data.dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?
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
          </v-dialog> -->
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
        <v-icon
          size="small"
          class="mr-2"
          @click="editItem(item.raw)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item.raw)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template #no-data>
        <div class="text-center">
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
  editedItem: {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
  },
  defaultItem: {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
  }
})
const updated = await mutationsDatabase().updateUserMutation()

const getUsers = await queryDatabase().getUsers()

if (getUsers !== undefined) {
  data.loading = false
}

console.log('datassss', getUsers)
console.log('update', updated)

const formTitle = data.editedIndex === -1 ? 'New Item' : 'Edit Item'

watch(() => data.dialog, (val: any) => val || close())
watch(() => data.dialogDelete, (val: any) => val || close())

const editItem = (item :any) => {
  data.editedIndex = getUsers!.indexOf(item)
  data.editedItem = Object.assign({}, item)
  data.dialog = true
}

const deleteItem = (item :any) => {
  data.editedIndex = getUsers!.indexOf(item)
  data.editedItem = Object.assign({}, item)
  data.dialogDelete = true
}

const deleteItemConfirm = () => {
  getUsers!.splice(data.editedIndex, 1)
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
    Object.assign(getUsers![data.editedIndex], data.editedItem)
  } else {
    getUsers!.push(data.editedItem)
  }
  close()
}
const getColor = (role : any) => {
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}
</script>
