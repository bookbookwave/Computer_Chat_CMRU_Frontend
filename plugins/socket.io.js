import io from 'socket.io-client'

const URL = 'https://9f20-2001-44c8-4653-c5c3-11dd-a26b-b6dc-a277.ap.ngrok.io'
// const URL = useRuntimeConfig().BACK_END_API_URL
const socket = io(URL, { autoConnect: false })
// export const socketQuery = (data) => {
//   return io(URL, { autoConnect: false, query: `userId=${data}` })
// }
socket.onAny((event, ...args) => {
  console.log('event', event, args)
})
export default socket
