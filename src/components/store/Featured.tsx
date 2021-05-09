import { CSSProperties } from 'react'
import styled from 'styled-components'
import { Title } from '../typography/Typography'
import { IItem } from './Item'
import ShirtDisplay from './itemDisplays/ShirtDisplay'

interface IFeatured {
  item: IItem
}

const FeaturedContainer = styled.section`
  position: relative;
  height: 780px;
`

const featuredBorderWidth = 2

const FeaturedSign = styled(Title)`
  position: absolute;
  transform: rotate(-30deg);
  left: 0;
  top: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.store.featuredText};
  z-index: 3;
  font-size: 4em;
  text-shadow: ${featuredBorderWidth}px ${featuredBorderWidth}px 0
      ${({ theme }) => theme.store.featuredBorderBottomRight},
    -${featuredBorderWidth}px -${featuredBorderWidth}px 0
      ${({ theme }) => theme.store.featuredBorderTopLeft},
    -${featuredBorderWidth}px ${featuredBorderWidth}px 0 ${({ theme }) => theme.store.featuredBorderTopLeft},
    ${featuredBorderWidth}px -${featuredBorderWidth}px 0 ${({ theme }) => theme.store.featuredBorderBottomRight};
`

const Featured = ({ item }: IFeatured) => {
  return (
    <FeaturedContainer>
      <FeaturedSign>FEATURED</FeaturedSign>
      {item.type == 'tshirt' ? <ShirtDisplay item={item} /> : null}
    </FeaturedContainer>
  )
}

export default Featured
