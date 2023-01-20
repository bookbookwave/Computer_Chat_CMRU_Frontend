export default gql`#prepend
query {
  users {
    id
    name
    email
    password
    role
    avatar
    createAt
    updateAt
  }
}`