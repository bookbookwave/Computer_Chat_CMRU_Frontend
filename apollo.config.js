import { useEnv } from './store/environment'

module.exports = {
  httpEndpoint: `${useEnv().BACKEND}/graphql`,
  inMemoryCacheOptions: {}
}
// module.exports = {
//   client: {
//     service: {
//       name: 'my-app',
//       // URL to the GraphQL API
//       url: 'http://localhost:3000/graphql'
//     },
//     // Files processed by the extension
//     includes: [
//       'src/**/*.vue',
//       'src/**/*.js'
//     ]
//   }
// }
