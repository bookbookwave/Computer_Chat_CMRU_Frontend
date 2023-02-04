export default gql`
mutation createFileUpload($filename: String!, $file: String!, $projectId: String,$messageRoom: String, $comment: String!, $statusId: String!) {
  createFile(
    input: {
      fileName: $filename
      file: $file
      projectId: $projectId
      comment: $comment
      statusId: $statusId
      messageRoomId: $messageRoom
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
