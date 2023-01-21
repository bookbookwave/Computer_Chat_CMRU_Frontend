export default gql`
mutation deleteUser($id: String!){
  deleteUser(id: $id)
}`
