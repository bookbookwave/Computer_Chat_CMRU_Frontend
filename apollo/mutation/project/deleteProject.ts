export default gql`
mutation deleteProject($id:String!){
  deleteProject(id: $id) 
}`
