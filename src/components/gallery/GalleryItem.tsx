import styled from 'styled-components'
import toDateFormat from '../../utils/toDateFormat'
import { SmallText } from '../typography/Typography'

export const ImageViewer = styled.div`
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
`

export interface IGalleryItem {
  body: string
  createdAt: string
  headline: string
  id: string
  media: string
  mediaType: string
  updatedAt: string
  topic: string
}

const GalleryItem = ({
  body,
  createdAt,
  headline,
  id,
  media,
  mediaType,
  updatedAt,
}: IGalleryItem) => {
  return (
    <>
      <ImageViewer>
        <img src={'data:' + mediaType + ';base64,' + media} />
      </ImageViewer>
      <p>{body}</p>
      <p>
        <SmallText>
          <i>
            Created: <span>{toDateFormat(createdAt)}</span>, Updated:{' '}
            {toDateFormat(updatedAt)}
          </i>
        </SmallText>
      </p>
    </>
  )
}

export default GalleryItem
