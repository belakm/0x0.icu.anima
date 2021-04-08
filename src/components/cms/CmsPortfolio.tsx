import { useContext, useEffect } from 'react'
import { gql, useMutation, useQuery } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import Form from '../form/Form'
import Window from '../Win95/Window/Window'

const FetchCVPosts = gql`
  query FetchCVPosts {
    allPosts {
      nodes {
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

const SubmitPost = gql`
  mutation SubmitPost(
    $body: String!
    $headline: String!
    $media: String!
    $authorId: Int!
    $topic: PostTopic!
  ) {
    createPost(
      input: {
        post: {
          body: $body
          headline: $headline
          media: $media
          topic: $topic
          authorId: $authorId
        }
      }
    ) {
      clientMutationId
    }
  }
`

interface IPortfolioValues {
  body: string
  headline: string
  media: string
  topic: string
}

const CmsPortfolio = () => {
  const [allPosts, reload] = useQuery({ query: FetchCVPosts })
  const [submittedPost, submitPost] = useMutation(SubmitPost)
  const authContext = useContext(AuthContext)

  const formFields = [
    {
      type: 'string',
      name: 'headline',
      label: 'Headline',
    },
    {
      type: 'textarea',
      name: 'body',
      label: 'Body',
    },
    {
      type: 'string',
      name: 'media',
      label: 'Media',
    },
    {
      type: 'dropdown',
      name: 'topic',
      label: 'Topic',
      values: ['KERNEL_PANIC', 'SITRI'],
    },
  ]

  const initialValues: IPortfolioValues = {
    body: '',
    headline: '',
    media: '',
    topic: '',
  }

  const onSubmit = ({ body, headline, media, topic }: IPortfolioValues) => {
    console.log(authContext.user)
    submitPost({
      body,
      headline,
      media,
      topic,
      authorId: authContext.user?.id,
    }).then()
  }

  useEffect(() => {
    console.log('ALLPOSTS', allPosts)
  }, [allPosts])

  useEffect(() => {
    console.log('SUBMITTED POST', submittedPost)
  }, [submittedPost])

  return (
    <>
      <Window title="ADD ANOTHER ;)">
        <Form
          onSubmit={onSubmit}
          fields={formFields}
          textSubmit="SUBMIT"
          initialValues={initialValues}
        />
      </Window>
      <section></section>
    </>
  )
}

export default CmsPortfolio
