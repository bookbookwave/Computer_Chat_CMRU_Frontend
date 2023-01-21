import { REGISTER } from '~~/apollo/mutation'

const mutationsDatabase = () => {
  const createUser = async ({ onResult, onError, value }:any) => {
    try {
      const variables = {
        name: value.name,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword,
        avatar: value.avatar
      }
      console.log('value.avatar :>> ', value.avatar)
      const data = await useMutation(REGISTER).mutate(variables)
      onResult(data)
    } catch (error) {
      onError(error)
    }
  }
  const updateUser = async () => {
    const updateUser = gql`
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

    const data = await useMutation(updateUser).mutate(variables)
    return data?.data
  }
  const deleteUser = async () => {
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
  return { createUser, updateUser, deleteUser }
}
export default mutationsDatabase
