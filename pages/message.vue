<template>
  <div class="h-fit">
    <input v-model="data.username" autocomplete="off" class="bg-white text-[#000] border-[#000]">
    <div
      v-for="(msg, index) in data.messages"
      :key="index"
      :class="['message text-[#fff]', msg.userId === data.username ? 'text-right' : 'text-left']"
    >
      {{ msg.msg }}
    </div>
    <form @submit.prevent="sendMessage">
      <input ref="input" v-model="data.message" class="terminal-input bg-white text-[#000] border-[#000]" autofocus>
      <button class="btn" type="button" @click="sendMessage">
        Send
      </button>
    </form>
    <v-bottom-navigation />
    <ContainerSnackBar />
  </div>
</template>

<script lang="ts" setup>
import socket from '../plugins/socket.io'

const data = reactive({
  userId: 'Wave',
  message: '',
  username: '',
  messages: ref<any[]>([])
})
onMounted(() => {
  socket.on('message', (msgBody: any) => {
    data.messages.push(msgBody)
    console.log(data.messages)
  })
})
const sendMessage = () => {
  socket.emit('message', { userId: data.username, msg: data.message })
  data.message = ''
}
// onUnmounted(() => useRouter().push('/'))
const intervalId = ref()
onBeforeMount(() => { console.log('hello') })
onMounted(() => {
  console.log('Component mounted')
})
onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
