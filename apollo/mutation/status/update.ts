export default gql`
mutation updateStatus($id: String!, $name: String!){
    updateStatus(input: { id: $id name: $name }) {
    id
    name
  }
}`
