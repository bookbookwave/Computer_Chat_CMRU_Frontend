<template>
  <div>
    <v-navigation-drawer v-model="data.drawer" permanent location="right" temporary>
      <template #prepend>
        <v-list-item lines="one" prepend-icon="mdi-google-classroom" title="Project Message" />
      </template>

      <v-divider />
      <v-col>
        <v-list density="compact" nav>
          <v-list-item
            v-for="(item, i) in projects"
            :key="i"
            prepend-icon="mdi-message"
            :title="item.nameEN"
            :value="i"
            @click="joinRoom(item.id)"
          />
        </v-list>
      </v-col>

      <div v-if="data.roomId !== ''">
        <v-divider />
        <v-list-item lines="one" prepend-icon="mdi-file-document" title="File of This Project" />
        <v-divider />

        <v-col>
          <v-list density="compact" nav>
            <v-no-ssr>
              <v-dialog v-model="data.fileDetails">
                <template #activator="{ props }">
                  <v-list-item
                    v-for="(item, i) in data.file"
                    v-bind="props"
                    :key="i"
                    prepend-icon="mdi-file-pdf-box"
                    :title="item.filename"
                    :subtitle="item.createdAt"
                    :value="i"
                    @click="getDetails(item)"
                  />
                </template>
                <modal-file-upload-details text-dialog="File Detail" :values="data.useDetails" @dialog-false="closeDialog" />
              </v-dialog>
            </v-no-ssr>
          </v-list>
        </v-col>
      </div>
    </v-navigation-drawer>
    <div id="chatContainer" ref="chatContainer" class="overflow-auto scroll-m-0 mb-4">
      <div v-if="data.messages.length === 0" class="flex align-center justify-center min-h-screen">
        <h1>
          Please ... Select Chat Room
        </h1>
      </div>
      <div class="max-h-[750px]">
        <div
          v-for="(msg, index) in data.messages"
          :key="index"
          :class="['message text-[#fff]', msg.userId === data.username ? 'text-right' : 'text-left']"
        >
          <!-- {{ msg }} -->
          <div class="text-caption text-disabled mx-4">
            {{ msg.userId === data.username ? 'You' : msg.userId }}
          </div>
          <v-chip class="ma-2" color="primary">
            {{ msg.msg }}
          </v-chip>
        </div>
      </div>
      <v-no-ssr>
        <v-bottom-navigation>
          <form class="flex min-w-full" @submit.prevent="sendMessage">
            <v-btn value="recent3" @click="data.drawer = !data.drawer">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-text-field ref="input" v-model="data.message" label="Message" placeholder="What do you think?" />
            <v-dialog v-model="data.isFile" persistent>
              <template #activator="{ props }">
                <v-btn v-if="data.roomId !== ''" value="recent1" v-bind="props" @click.prevent="playSound()">
                  <v-icon>mdi-attachment</v-icon>
                </v-btn>
              </template>
              <form-file-upload text-dialog="Upload File" :room-id="data.roomId" @dialog-false="closeDialog" />
            </v-dialog>
            <v-btn value="recent2" @click="sendMessage">
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </form>
        </v-bottom-navigation>
      </v-no-ssr>
    </div>

    <!-- <ContainerSnackBar /> -->
  </div>
</template>

<script lang="ts" setup>
import socket from '../plugins/socket.io'
import { useEnv } from '~~/store/environment'
import { useProfile } from '~~/store/profile'
import { useQueryStore } from '~~/store/queryData'
import queryDatabase from '~~/libs/query/queryDatabase'
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'

if (useCookie('token').value === null) {
  useRouter().push('/login')
}

type projectById = {
  id: string,
  nameTH: string,
  nameEN: string,

}
type response = {
  userId: string,
  projectId: string,
  msg: string,
}
type FileUpload = {
  filename: string,
  file: string,
  createdAt : string,
  comment: string,
  status: {
    name: string,
  }
}

const data = reactive({
  host: useEnv().BACKEND_API_URL,
  drawer: true,
  message: '',
  username: useProfile().name,
  userId: useProfile().userId,
  roomId: '',
  messages: ref<response[]>([]),
  file: ref<FileUpload[]>([]),
  transition: 'slide-y-reverse-transition',
  direction: 'top',
  fab: false,
  isFile: false,
  fileDetails: false,
  useDetails: []
})
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})

const findUsername = (userId : String) => {
  const users = useQueryStore().users
  const user = users.map((user:any) => user.id === userId ? user.name : null)
  const username = user.find((user:any) => user !== null)
  return username
}

const closeDialog = () => {
  data.isFile = false
  data.fileDetails = false
}
const chatContainer = ref<any>(null)

const projects = await useQueryStore().projectById as projectById[]

const getDetails = (items:any) => {
  data.useDetails = items
}

const joinRoom = async (roomId: any) => {
  if (data.roomId !== roomId) {
    mutationsDatabase().getMessageByProject({
      onResult: (message: any) => {
        message.map((message: any) =>
          data.messages.unshift({
            msg: message.message,
            projectId: message.projectId,
            userId: findUsername(message.userId)
          }))
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
      },
      onError (error: Error) {
        console.error('error :>> ', error)
      },
      value: roomId
    })
    mutationsDatabase().getFileByProjectId({
      onResult: (file: any) => {
        data.file = []
        file.map((file: any) =>
          data.file.unshift({
            filename: file.fileName,
            file: file.file,
            createdAt: new Date(file.createdAt).toLocaleDateString(),
            status: file.status,
            comment: file.comment
          }
          )
        )
      },
      onError (error: Error) {
        console.error('error :>> ', error)
      },
      value: roomId
    })
    await socket.emit('leaveRoom', data.roomId)

    data.roomId = roomId
    await socket.emit('joinRoom', roomId)
    data.messages = []
  }
}

onMounted(() => {
  socket.connect()
  socket.on('connection', (socket) => {
    data.messages.push(socket)
  })
  socket.on('disconnect', (socket: any) => {
    data.messages.push(socket)
  })
  socket.on('response', (msgBody: response) => {
    data.messages.push({ ...msgBody, userId: findUsername(msgBody.userId) })
    if (msgBody.userId !== data.userId) {
      playSound()
    }
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  })
})
const playSound = () => {
  // const audio = new Audio('/sound/notify.mp3')
  const audio = new Audio('/sound/notify2.mp3')
  audio.play()
}

const sendMessage = () => {
  if (data.message !== '' && data.roomId !== '') {
    socket.emit('message', { userId: data.userId, msg: data.message, projectId: data.roomId })
    data.message = ''
    // window.scrollTo(0, document.body.scrollHeight)
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}
definePageMeta({ name: 'Chat', title: 'hello eieie' })

useHead({
  title: 'Chat Message',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})

</script>
