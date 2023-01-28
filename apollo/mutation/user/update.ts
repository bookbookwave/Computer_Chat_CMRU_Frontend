export default gql`
mutation updateUser($id:String, $name:String!, $password:String!, $email:String!, $avatar:String, $role:Role){
  updateUser(input: {id: $id name: $name, email: $email, password: $password, avatar: $avatar , role: $role }) {
    id
    name
    email
    password
    role
    avatar
    createAt
    updateAt
  }
}
`
