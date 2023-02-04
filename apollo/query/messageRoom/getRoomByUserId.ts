export default gql`
query getRoomByUserId($id: String!){
  findMessageRoomByUserId(id: $id) {
    # user {
    #   id
    #   name
      # email
      # role
      # avatar
      # createAt
      # updateAt
    # }
    # messageRoom {
    #   id
    # }
    # userId
    messageRoomId
  }
}
`
