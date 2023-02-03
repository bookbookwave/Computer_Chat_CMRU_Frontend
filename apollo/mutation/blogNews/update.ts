export default gql`
mutation updateBlogNews($id: String!,$title: String!, $content: String!, $link: String!){
  updateBlogNews(
    input: { id: $id, title: $title, content: $content, link: $link }
  ) {
    id
    title
    content
    link
    createdAt
    updatedAt
  }
}`
