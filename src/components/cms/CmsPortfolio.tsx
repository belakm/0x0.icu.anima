import { useContext, useEffect } from 'react'
import { gql, useMutation, useQuery } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import Form from '../form/Form'
import Window from '../Win95/Window/Window'
import CmsPortfolioItem, { ICmsPorfolioItem } from './CmsPortfolioItem'

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
    $media: Base64EncodedBinary!
    $mediaType: String!
    $authorId: Int!
    $topic: PostTopic!
  ) {
    createPost(
      input: {
        post: {
          body: $body
          headline: $headline
          media: $media
          mediaType: $mediaType
          topic: $topic
          authorId: $authorId
        }
      }
    ) {
      clientMutationId
    }
  }
`

const toDataUrl = (file: Blob): Promise<string> => {
  const reader = new FileReader()
  const promise = new Promise<string>((resolve, reject) => {
    reader.readAsDataURL(file)
    reader.onloadend = ({ target }) => {
      console.log(3, target)
      if (
        target &&
        target.result &&
        typeof target.result == 'string' &&
        target.readyState == FileReader.DONE
      ) {
        resolve(target.result)
      } else reject('')
    }
  })
  return promise
}

interface IPortfolioValues {
  body: string
  headline: string
  media: string | Blob
  topic: string
}

interface IFetchedPosts {
  allPosts: {
    nodes: ICmsPorfolioItem[]
  }
}

const CmsPortfolio = () => {
  const [allPosts, fetchAllPosts] = useQuery<IFetchedPosts>({
    query: FetchCVPosts,
  })
  const [submittedPost, submitPost] = useMutation(SubmitPost)
  const authContext = useContext(AuthContext)

  useEffect(console.log, [allPosts])

  const formFields = [
    {
      type: 'string',
      name: 'headline',
      label: 'Headline',
      required: true,
    },
    {
      type: 'textarea',
      name: 'body',
      label: 'Body',
      required: true,
    },
    {
      type: 'file',
      name: 'media',
      label: 'Media',
      required: true,
    },
    {
      type: 'select',
      name: 'topic',
      label: 'Topic',
      required: true,
      options: [
        { value: 'KERNEL_PANIC', text: 'KERNEL_PANIC' },
        { text: 'PORTFOLIO', value: 'PORTFOLIO' },
      ],
    },
  ]

  const initialValues: IPortfolioValues = {
    body: '',
    headline: '',
    media: '',
    topic: '',
  }

  return (
    <>
      <Window title="SUBMIT YOUR WISH">
        <Form
          onSuccess={() => fetchAllPosts()}
          onSubmit={async ({ body, headline, media, topic }) => {
            try {
              const values1 = await toDataUrl(media as Blob)
              const split = values1.substr(5).split(';base64,')
              if (split.length == 2) {
                const [mediaType, mediaData] = split
                const values = {
                  body,
                  headline,
                  media: mediaData,
                  mediaType,
                  topic,
                  authorId: authContext.user?.id,
                }
                const { error } = await submitPost(values)
                if (error) {
                  throw error
                }
                return {
                  values,
                }
              } else {
                throw 'error in parsing'
              }
            } catch (e) {
              return {
                error:
                  typeof e == 'object' && e.error != null
                    ? e.message
                    : JSON.stringify(e),
              }
            }
          }}
          fields={formFields}
          textSubmit="SUBMIT"
          initialValues={initialValues}
        />
      </Window>
      <div>
        {allPosts.data?.allPosts.nodes.map(
          ({ body, createdAt, headline, id, media, mediaType, updatedAt }) => (
            <CmsPortfolioItem
              key={id}
              body={body}
              createdAt={createdAt}
              headline={headline}
              id={id}
              media={media}
              mediaType={mediaType}
              updatedAt={updatedAt}
            />
          ),
        )}
      </div>
    </>
  )
}

export default CmsPortfolio
