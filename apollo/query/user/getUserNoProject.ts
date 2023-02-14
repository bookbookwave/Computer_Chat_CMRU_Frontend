export default gql`
query getUserNoProject{
  usersNoProject {
    id
    name
    email
    role
    avatar
    credentialId
    createAt
    updateAt
  }
}`
