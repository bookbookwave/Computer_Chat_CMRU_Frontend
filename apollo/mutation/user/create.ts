export default gql`
 mutation createUser($avatar: String,$name: String!,$email: String!,$password: String!,$role: Role!) {
    createUser(
      input: {
        name: $name
        email: $email
        role: $role
        password: $password
        avatar: $avatar
      }
    ){        
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
