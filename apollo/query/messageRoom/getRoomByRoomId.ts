export default gql`
query getRoomByUserId($id: String!) {
  findMessageRoomByRoomId(id: $id) {
    user {
      # id
      name
      # email
      # password
      # role
      # avatar
      # createAt
      # updateAt
    }
    # messageRoom {
    #   id
    # }
    userId
    messageRoomId
  }
}`
