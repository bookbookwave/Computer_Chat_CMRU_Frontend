export default gql`
mutation updateBanner($title: String!, $image: String!, $link: String!){
  updateBanner(input: { 
    title: $title
   image: $image 
   link: $link }) {
    id
    title
    image
    link
    createAt
    updateAt
  }
}`
