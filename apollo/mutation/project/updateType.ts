export default gql`
mutation updateProjectType($id: String!,$name: String!){
  updateProjectType(input: { id:$id name: $name }) {
    id
    name
  }
}`
