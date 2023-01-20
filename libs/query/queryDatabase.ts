const queryDatabase = () => {
  const getUsers = async () => {
    type typeUsers = {
      users: {
      id: string,
      name: string,
      email: string,
      password: string,
      role: string,
      avatar: string,
      createAt: string,
      updateAt: string,
    }[]
  }
    const query = gql`
  query getUser{
  users {
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
    const res = await useAsyncQuery<typeUsers>(query).data.value

  }
  return { getUsers }
}

export default queryDatabase
