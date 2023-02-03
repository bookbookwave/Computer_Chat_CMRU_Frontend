export default gql`
mutation createLogLogin($id:String!){
  createLogLogin(input: { userId: $id }) {
    # id
    userId
    createdAt
  }
}`
