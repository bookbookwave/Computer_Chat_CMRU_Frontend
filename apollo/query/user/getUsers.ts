export default gql`#prepend
query getUser{
  users {
    id
    name
    email
    # password
    credentialId
    role
    avatar
    createAt
    updateAt
  }
}`
