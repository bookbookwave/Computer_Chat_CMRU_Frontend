export default gql`
query projects{
    projects {
        id
    nameTH
    nameEN
    statusId
    typeId
    createdAt
    updatedAt
    status {
        name
    }
    projectType{
        name
    }
}}`
