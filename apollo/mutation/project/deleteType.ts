export default gql`
mutation deleteProjectType($id: String!){
  deleteProject(id: $id)
}`
