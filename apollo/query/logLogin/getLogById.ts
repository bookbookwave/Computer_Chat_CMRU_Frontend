export default gql`
query getLogById($id: String!){
  getLogById(id: $id) {
    # id
    userId
    createdAt
  }
}`
