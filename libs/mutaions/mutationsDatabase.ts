import { DELETE_USER, REGISTER } from '~~/apollo/mutation'

const mutationsDatabase = () => {
  const createUser = async ({ onResult, onError, value }:any) => {
    try {
      console.log('value.avatar :>> ', value)
      const data = await useMutation(REGISTER).mutate(value)
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
  const deleteUser = async ({ onResult, onError, value }:any) => {
    try {
      const variables = {
        id: value
      }
      const res = await useMutation(DELETE_USER).mutate(variables)
      onResult(res)
    } catch (error) {
      onError(error)
    }
  }
  return { createUser, updateUser, deleteUser }
}
export default mutationsDatabase
