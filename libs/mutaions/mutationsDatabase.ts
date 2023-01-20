const mutationsDatabase = () => {
  const updateUserMutation = async () => {
    const update = gql`
    mutation updateUser($id: String, $name: String! ,$email: String! ,$password: String!) {
        updateUser(input: { id:$id name: $name, email: $email, password: $password}) {
    id
    name
    email
    password
    role
    avatar
    createAt
    updateAt
  }
    }`
    const variables = {
      id: 'clcx7v3d30000i163w6hn0n00',
      name: 'wave jjjjj',
      email: 'hhhh@gmail.com',
      password: '12345'
    }

    const data = await useMutation(update).mutate(variables)
    return data?.data
  }
  const deleteUserMutation = async () => {
    const deleteUser = gql`
    mutation deleteUser($id:String!){
  deleteUser(id: "string")
}`
    const variables = {
      id: ''
    }
    const res = await useMutation(deleteUser).mutate(variables)
    console.log('res', res)
  }
  return { updateUserMutation, deleteUserMutation }
}
export default mutationsDatabase
