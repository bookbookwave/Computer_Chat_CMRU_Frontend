export default gql`
mutation createStatus($name: String!){
    createStatus(input: { name: $name }) {
    id
    name
  }
}`
