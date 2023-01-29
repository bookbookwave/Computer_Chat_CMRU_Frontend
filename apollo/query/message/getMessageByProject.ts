export default gql`
query messageByProject($id: String!){
  messagesByProject(id: $id) {
    message
    userId
    projectId
    createdAt
  }
}`
