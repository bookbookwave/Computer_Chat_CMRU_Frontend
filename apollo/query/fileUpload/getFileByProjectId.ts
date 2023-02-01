export default gql`
query getFileUpload($id: String!){
  getFilesById(id: $id) {
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
