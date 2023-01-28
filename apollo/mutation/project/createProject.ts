export default gql`
mutation createProject($nameTH: String!,$nameEN: String!,$statusId: String!,$typeId: String! ){
  createProject(
    input: {
      nameTH: $nameTH
      nameEN: $nameEN
      statusId: $statusId
      typeId: $typeId
    }
  ) {
    id
    nameTH
    nameEN
    statusId
    typeId
    createdAt
    updatedAt
  }
}`
