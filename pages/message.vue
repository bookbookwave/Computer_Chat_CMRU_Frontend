<template>
  <div>
    <v-navigation-drawer v-model="data.drawer" permanent location="right" temporary>
      <template #prepend>
        <v-list-item lines="one" prepend-icon="mdi-message" title="Project Message" />
      </template>

      <v-divider />
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
    </v-navigation-drawer>
    <div ref="chatContainer" class="max-h-screen overflow-auto scroll-m-0 mb-4">
      <div v-if="data.messages.length === 0" class="flex align-center min-h-screen justify-center">
        <h1>
          Please ... Select Chat Room
        </h1>
      </div>
      <div
        v-for="(msg, index) in data.messages"
        :key="index"
        :class="['message text-[#fff]', msg.userId === data.userId ? 'text-right' : 'text-left']"
      >
        <!-- {{ msg }} -->
        <v-chip class="ma-2" color="primary">
          {{ msg.msg }}
        </v-chip>
      </div>
    </div>

    <v-bottom-navigation>
      <form class="flex min-w-full" @submit.prevent="sendMessage">
        <v-btn value="recent3" @click="data.drawer = !data.drawer">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-text-field ref="input" v-model="data.message" label="Message" placeholder="What do you think?" />
        <v-btn value="recent1" @click.prevent="playSound()">
          <v-icon>mdi-attachment</v-icon>
        </v-btn>
        <v-btn value="recent2" @click="sendMessage">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </form>
    </v-bottom-navigation>
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

const data = reactive({
  host: useEnv().BACKEND_API_URL,
  drawer: true,
  message: '',
  username: useProfile().name,
  userId: useProfile().userId,
  roomId: '',
  messages: ref<response[]>([]),
  transition: 'slide-y-reverse-transition',
  direction: 'top',
  fab: false
})
await queryDatabase({
  onResult: () => {
  },
  onError: (error: Error) => {
    console.error('error :>> ', error)
  }
})
const chatContainer = ref<any>(null)
const projects = await useQueryStore().projectById as projectById[]

const joinRoom = async (roomId: any) => {
  if (data.roomId !== roomId) {
    mutationsDatabase().getMessageByProject({
      onResult: (message: any) => {
        console.log('message :>> ', message)
        message.map((message: any) =>
          data.messages.unshift({
            msg: message.message,
            projectId: message.projectId,
            userId: message.userId
          }))
      },
      value: roomId
    })
    await socket.emit('leaveRoom', data.roomId)

    data.roomId = roomId
    await socket.emit('joinRoom', roomId)
    data.messages = []
  }
}

// const socket = socketQuery('cldekl9yf0006i1czhbjpky1c').connect()
onMounted(() => {
  socket.connect()
  // socket.emit('join', { data: 'cldekl9yf0006i1czhbjpky1c' })
  socket.on('connection', (socket) => {
    data.messages.push(socket)
  })
  socket.on('disconnect', (socket: any) => {
    data.messages.push(socket)
  })
  socket.on('response', (msgBody: response) => {
    data.messages.push(msgBody)
    if (msgBody.userId !== data.userId) {
      playSound()
    }
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
    // scoll the chatContainer  to buttom
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

</script>
