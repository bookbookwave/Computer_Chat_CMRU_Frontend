export default gql`
query getUserProject($id: String!){
getUserProject(id: $id) {
  user {
    id
    name
    credentialId
    email
    role
    avatar
    createAt
    updateAt
  }
  projectId
  userId
}
}`
