export default gql`
query projectById($id: String!){
  projectsById(id: $id) {
    id
    nameTH
    nameEN
    statusId
    typeId
    createdAt
    updatedAt
    status {
        name
    }
    projectType{
        name
    }
  }
}`
