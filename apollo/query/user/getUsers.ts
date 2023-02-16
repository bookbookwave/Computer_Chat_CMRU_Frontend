export default gql`#prepend
query getUser{
  users {
    id
    name
    credentialId
    email
    # password
    role
    avatar
    createAt
    updateAt
  }
}`
