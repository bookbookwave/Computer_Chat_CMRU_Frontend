export default gql`
mutation createUserProject($data:[UserProjectCreateManyInput!]!){
  createUserProject(input: { data: $data })
}`
