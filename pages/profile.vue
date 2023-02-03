<template>
  <v-container>
    <div>
      <div>
        <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div class="relative col-start-1 row-start-1">
            <div class="flex justify-center align-center">
              <v-avatar size="300">
                <v-img
                  :src="`${data.avatar.startsWith('http') ? 'https://picsum.photos/300/300': `${data.http}/images/${data.avatar}`}`"
                  alt="John"
                />
              </v-avatar>
            </div>
          </div>
          <div class="relative col-start-1 row-start-2 md:row-start-1 md:col-start-2 mt-3 justify-center md:align-center align-start">
            <v-card class="pa-4">
              <v-card-item>
                <v-card-title class="d-flex justify-center align-center">
                  {{ data.name }}
                  <v-chip :color="getColor()" class="mx-2">
                    {{ data.role }}
                  </v-chip>
                </v-card-title>
                <v-card-subtitle class="d-flex justify-center align-center">
                  {{ data.email }}
                </v-card-subtitle>
              </v-card-item>
              <div class="d-flex justify-center align-center">
                <v-no-ssr>
                  <v-dialog v-model="data.dialog" persistent>
                    <template #activator="{ props }">
                      <v-btn color="primary" v-bind="props">
                        Edit User
                      </v-btn>
                    </template>
                    <form-dialog-create-user :value="data" text-dialog="Edit User" @dialog-false="closeDialog" />
                  </v-dialog>
                </v-no-ssr>
              </div>
              <!-- <v-card-text>
                This is content
              </v-card-text> -->
            </v-card>
          </div>
        </div>
        <div class="font-weight-bold text-h4 mt-3">
          Login TimeStamp
        </div>
        <div class="md:max-h-[500px] overflow-auto mt-2">
          <div>
            <v-card
              v-for="item in data.logById"
              :key="item.userId"
              :title="item.day"
              :subtitle="item.time"
              text="..."
            />
            <!-- <v-list lines="one">
              <v-list-item
                v-for="item in data.logById"
                :key="item.userId"
                :title="item.createdAt"
                subtitle="..."
              />
            </v-list> -->
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import queryDatabase from '~~/libs/query/queryDatabase'
import { useEnv } from '~~/store/environment'
import { useProfile } from '~~/store/profile'
import { useLogLogin } from '~~/store/logLogin'
if (useCookie('token').value === null) {
  useRouter().push('/login')
}
type LogById = {
  userId: string
  day: string
  time: string
  createdAt: string
}
const data = reactive({
  http: useEnv().BACKEND_API_URL,
  name: useProfile().name,
  avatar: useProfile().avatar,
  email: useProfile().email,
  userId: useProfile().userId,
  role: useProfile().role,
  dialog: false,
  logById: ref<LogById[]>([])
})
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})

const logById = await useLogLogin().logByUser
logById.forEach((element: any) => {
  data.logById.unshift({ userId: element.userId, day: new Date(element.createdAt).toDateString(), time: new Date(element.createdAt).toLocaleTimeString(), createdAt: new Date(element.createdAt).toLocaleString() })
})

const getColor = () => {
  const role = useProfile().role
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}
const closeDialog = () => {
  data.dialog = false
}
useHead({
  title: 'Profile',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})

</script>
