import Window from '../Win95/Window/Window'

export interface ICmsPorfolioItem {
  body: string
  createdAt: string
  headline: string
  id: string
  media: string
  mediaType: string
  updatedAt: string
}

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
      <h3>{headline}</h3>
      <img src={'data:' + mediaType + ';base64,' + media} />
      <p>{body}</p>
      <p>
        Created: {createdAt}, Updated: {updatedAt}
      </p>
    </Window>
  )
}

export default CmsPortfolioItem
