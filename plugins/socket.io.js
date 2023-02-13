import io from 'socket.io-client'

const URL = 'https://c40f-119-42-109-139.ap.ngrok.io'
// const URL = useRuntimeConfig().BACK_END_API_URL
const socket = io(URL, { autoConnect: false })
// export const socketQuery = (data) => {
//   return io(URL, { autoConnect: false, query: `userId=${data}` })
// }
socket.onAny((event, ...args) => {
  console.log('event', event, args)
})
export default socket
