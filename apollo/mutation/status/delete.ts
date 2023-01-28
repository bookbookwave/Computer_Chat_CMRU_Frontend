export default gql`
mutation deleteStatus($id: String!){
    deleteStatus(id: $id )
}`
