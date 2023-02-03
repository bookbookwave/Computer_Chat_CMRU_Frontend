export default gql`
mutation deleteBlogNews($id: String!){
  deleteBlogNews(id: $id)
}`
