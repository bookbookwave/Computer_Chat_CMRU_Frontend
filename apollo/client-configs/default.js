import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({ uri: 'http://localhost:3000/graphql' })

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
})
