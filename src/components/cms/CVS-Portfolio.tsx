import { gql, useQuery } from 'urql'

const FetchCVPosts = gql`
  allPosts {
    nodes {
      authorId
      body
      createdAt
      headline
      id
      personByAuthorId {
        id
        fullName
      }
      summary(length: 300, omission: "")
      topic
      updatedAt
    }
  }
`

const Cms = () => {}

export default Cms
