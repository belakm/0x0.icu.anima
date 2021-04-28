import { useEffect, useState } from 'react'
import GalleryItem, { IGalleryItem } from './GalleryItem'
import { useQuery } from 'urql'
import { FetchPosts } from '../../graphql/Post'
import Window, { WindowWrapper } from '../Win95/Window/Window'
import ColumnGrid from '../common/ColumnGrid'

const Gallery = () => {
  const [postsResult, reexecuteQuery] = useQuery({
    query: FetchPosts,
  })
  const { data, fetching, error } = postsResult
  const [posts, setPosts] = useState<IGalleryItem[]>([])

  useEffect(() => {
    if (postsResult.data) {
      setPosts(postsResult.data.allPosts.nodes)
    }
  }, [postsResult])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return posts ? (
    <ColumnGrid
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
          <Window title={headline}>
            <WindowWrapper>
              <GalleryItem
                topic={topic}
                key={id}
                body={body}
                createdAt={createdAt}
                headline={headline}
                id={id}
                media={media}
                mediaType={mediaType}
                updatedAt={updatedAt}
              />
            </WindowWrapper>
          </Window>
        ),
      )}
    />
  ) : (
    <p>Loading ...</p>
  )
}

export default Gallery
