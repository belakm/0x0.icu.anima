import { useContext, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import { FetchPosts, SubmitPost } from '../../graphql/Post'
import toDataUrl from '../../utils/toDataUrl'
import Grid from '../common/Grid'
import Form from '../form/Form'
import Window from '../system/Window/Window'
import CmsPortfolioItem, { ICmsPorfolioItem } from './CmsPortfolioItem'

export interface IPostFormValues {
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

export const postFormFields = [
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

const CmsPortfolio = () => {
  const [allPosts, fetchAllPosts] = useQuery<IFetchedPosts>({
    query: FetchPosts,
    requestPolicy: 'network-only',
  })
  const [posts, setPosts] = useState<ICmsPorfolioItem[]>()
  const [submittedPost, submitPost] = useMutation(SubmitPost)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    if (allPosts.data) {
      setPosts(allPosts.data.allPosts.nodes)
    }
  }, [allPosts])

  const initialValues: IPostFormValues = {
    body: '',
    headline: '',
    media: '',
    topic: 'KERNEL_PANIC',
  }

  return (
    <>
      <Window title="SUBMIT YOUR WISH" style={{ marginBottom: '2em' }}>
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
          fields={postFormFields}
          textSubmit="SUBMIT"
          initialValues={initialValues}
        />
      </Window>
      {posts ? (
        <Grid
          elements={posts.map(
            ({
              body,
              createdAt,
              headline,
              id,
              media,
              mediaType,
              updatedAt,
              topic,
            }) => (
              <CmsPortfolioItem
                topic={topic}
                key={id}
                body={body}
                createdAt={createdAt}
                headline={headline}
                id={id}
                media={media}
                mediaType={mediaType}
                updatedAt={updatedAt}
                reload={() => fetchAllPosts()}
              />
            ),
          )}
        />
      ) : (
        <p>Loading ...</p>
      )}
    </>
  )
}

export default CmsPortfolio
