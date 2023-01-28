<template>
  <div class="h-fit">
    <div
      v-for="(msg, index) in data.messages"
      :key="index"
      :class="['message text-[#fff]', msg.userId === data.username ? 'text-right' : 'text-left']"
    >
      <v-chip
        class="ma-2"
        color="primary"
      >
        {{ msg.msg }}
      </v-chip>
    </div>
    <v-bottom-navigation>
      <form class="flex min-w-full" @submit.prevent="sendMessage">
        <v-text-field
          ref="input"
          v-model="data.message"
          label="Message"
          placeholder="What do you think?"
        />
        <v-btn value="recent1">
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

const data = reactive({
  host: useEnv().BACKEND_API_URL,
  message: '',
  username: useProfile().name,
  messages: ref<any[]>([])
})

// const socket = socketQuery('cldekl9yf0006i1czhbjpky1c').connect()
onMounted(() => {
  socket.connect()
  // socket.emit('join', { data: 'cldekl9yf0006i1czhbjpky1c' })
  socket.on('connection', (socket) => {
    data.messages.push({ msg: socket })
  })
  socket.on('disconnect', (socket) => {
    data.messages.push({ msg: socket })
  })
  socket.on('message', (msgBody: any) => {
    data.messages.push(msgBody)
  })
})
const sendMessage = () => {
  if (data.message !== '') {
    socket.emit('message', { userId: data.username, msg: data.message })
    data.message = ''
  }
}

</script>
