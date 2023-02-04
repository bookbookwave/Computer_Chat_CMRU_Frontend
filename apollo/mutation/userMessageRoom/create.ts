export default gql`
mutation createManyUserMessageRoom($data:[UserMessageRoomCreateManyInput!]!){
    createManyUserMessageRoom(input: { data: $data })
}`
