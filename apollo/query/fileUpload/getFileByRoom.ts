export default gql`
query getFilesByRoom($id: String!){
  getFilesByRoom(id: $id) {
    fileName
    file
    projectId
    statusId
    comment
    createdAt
    project {
      nameTH
      nameEN
      statusId
      typeId
      createdAt
      updatedAt
    }
    status {
      name
    }
  }
}
`
