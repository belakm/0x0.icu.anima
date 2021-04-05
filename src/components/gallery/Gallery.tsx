import { useEffect, useState } from 'react';
import GalleryImage from './GalleryImage'
import { FlexColumn, FlexRow } from '../common/Flex'
import { gql, useQuery } from 'urql';

const PostsQuery = gql`
  query PostsQuery {
    allPosts {
      edges {
        node {
          id
          body
          createdAt
          headline
        }
      }
    }
  }
`;

interface IGalleryImage {
  src: string
  title: string
}

const sitriImages: IGalleryImage[] = []

const Gallery = () => {

  const [result, reexecuteQuery] = useQuery({
    query: PostsQuery,
  });

  const { data, fetching, error } = result;
  
  const [images, setImages] = useState<IGalleryImage[]>([])
  
  useEffect(() => {
    setImages(sitriImages)
  }, [])

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <section>
      <FlexRow wrap="wrap" align="center">
        {images.map(({ src, title }) => (
          <FlexColumn style={{ width: '30%', margin: '1em' }} key={title}>
            <GalleryImage
              src={src}
              title={`${title.toUpperCase()}.sitrifile`}
            />
          </FlexColumn>
        ))}
      </FlexRow>
    </section>
  )
}

export default Gallery
