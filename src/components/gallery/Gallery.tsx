import { useEffect, useState } from 'react'
import GalleryItem, { IGalleryItem } from './GalleryItem'
import { useQuery } from 'urql'
import { FetchPosts } from '../../graphql/Post'
import Window, { WindowWrapper } from '../system/Window/Window'
import ColumnGrid from '../containers/ColumnGrid'
import LoaderTerminal from '../system/LoaderTerminal/LoaderTerminal'

interface IGallery {}

const Gallery = () => {
  const [postsResult, reexecuteQuery] = useQuery({
    query: FetchPosts,
  })

  const { data, fetching, error } = postsResult
  const [success, setSuccess] = useState<string | undefined>(undefined)
  const [fail, setFail] = useState<string | undefined>(error?.message)
  const [posts, setPosts] = useState<IGalleryItem[]>([])

  useEffect(() => {
    if (postsResult.data) {
      setSuccess(
        `Fetch complete, got ${postsResult.data.allPosts.nodes.length} items.`,
      )
      setTimeout(() => {
        setPosts(postsResult.data.allPosts.nodes)
      }, 200)
    } else {
      setFail(error?.message)
    }
  }, [postsResult])

  if (error) return <p>Oh no... {error.message}</p>

  return !fetching && posts.length > 0 ? (
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
    <LoaderTerminal
      title="0x0_TERM"
      textScriptName="./init_gallery.sh"
      textProgress="Loading: "
      textFailed={fail}
      textSuccess={success}
    />
  )
}

export default Gallery
