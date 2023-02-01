export default gql`
mutation createFileUpload($filename: String!, $file: String!, $projectId: String!, $comment: String!, $statusId: String!) {
  createFile(
    input: {
      fileName: $filename
      file: $file
      projectId: $projectId
      comment: $comment
      statusId: $statusId
    }
  ) {
    id
    fileName
    file
    projectId
    comment
    createdAt
  }
}
`
