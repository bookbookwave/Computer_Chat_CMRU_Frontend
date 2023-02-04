export default gql`
query messagesByRoom($id: String!){
    messagesByRoom(id: $id) {
    message
    userId
    messageRoomId
    createdAt
  }
}`
