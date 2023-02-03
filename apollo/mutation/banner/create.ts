export default gql`
mutation createBanner($title: String!, $image: String!, $link: String!){
  createBanner(input: { 
    title: $title
   image: $image 
   link: $link}) {
    id
    title
    image
    link
    createAt
    updateAt
  }
}`
