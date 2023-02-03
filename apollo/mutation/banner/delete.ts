export default gql`
mutation deleteBanner($id: String!){
    deleteBanner(id: $id)
}`
