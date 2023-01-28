export default gql`
mutation register($avatar: String,$name: String!,$email: String!,$password: String!,$confirmPassword: String!) {
    register(
      input: {
        name: $name
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        avatar: $avatar
      }
    )
  }`
