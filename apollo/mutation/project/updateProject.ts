export default gql`
mutation updateProject($id:String! ,$nameTH: String,$nameEN: String,$statusId: String,$typeId: String ){
  updateProject(
    input: {
        id: $id
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
