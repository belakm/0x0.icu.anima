import styled from 'styled-components'
import Window, { WindowWrapper } from '../Win95/Window/Window'

export interface ICmsPorfolioItem {
  body: string
  createdAt: string
  headline: string
  id: string
  media: string
  mediaType: string
  updatedAt: string
}

const ImageViewer = styled.div`
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  img {
    width: 100%;
    height: auto;
  }
`

const CmsPortfolioItem = ({
  body,
  createdAt,
  headline,
  id,
  media,
  mediaType,
  updatedAt,
}: ICmsPorfolioItem) => {
  return (
    <Window title={headline}>
      <WindowWrapper>
        <h3>{headline}</h3>
        <ImageViewer>
          <img src={'data:' + mediaType + ';base64,' + media} />
        </ImageViewer>
        <h2>
          Created: {createdAt}, Updated: {updatedAt}
        </h2>
        <p>{body}</p>
      </WindowWrapper>
    </Window>
  )
}

export default CmsPortfolioItem
