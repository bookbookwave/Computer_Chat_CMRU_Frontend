export default gql`#prepend
query getUser{
  users {
    id
    name
    email
    # password
    role
    avatar
    createAt
    updateAt
  }
}`
