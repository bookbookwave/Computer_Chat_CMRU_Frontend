export default gql`
mutation createBlogNews($title: String!, $content: String!, $link: String!){
  createBlogNews(
    input: { title: $title, content: $content, link: $link }
  ) {
    id
    title
    content
    link
    createdAt
    updatedAt
  }
}
`
