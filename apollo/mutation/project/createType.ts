export default gql`
mutation createProjectType($name: String!){
  createProjectType(input: { name: $name }) {
    id
    name
  }
}`
