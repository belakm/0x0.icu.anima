import { useEffect } from 'react'
import { gql, useQuery } from 'urql'
import Form from '../form/Form'
import Window from '../Win95/Window/Window'

const FetchCVPosts = gql`
  query FetchCVPosts {
    allPosts {
      nodes {
        authorId
        body
        createdAt
        headline
        id
        media
        summary
        personByAuthorId {
          fullName
        }
        topic
        updatedAt
      }
    }
  }
`

const CreateCVPost = gql`
  mutation CreateCVPost {
    createPost(input: { post: { authorId: 10, headline: "", media: "" } }) {
      post {
        id
      }
    }
  }
`

const CmsPortfolio = () => {
  const [allPosts, reload] = useQuery({ query: FetchCVPosts })
  useEffect(() => {
    console.log('ALLPOSTS', allPosts)
  }, [allPosts])

  const formFields = [
    {
      type: 'string',
      name: 'test',
      label: 'test',
    },
  ]

  const formSubmit = values => {
    console.log(values)
  }

  return (
    <>
      <Window title="ADD ANOTHER ;)">
        <Form onSubmit={formSubmit} fields={formFields} />
      </Window>
      <section></section>
    </>
  )
}

export default CmsPortfolio
