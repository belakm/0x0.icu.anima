import { CSSProperties } from 'react'
import styled from 'styled-components'
import { Title } from '../typography/Typography'
import LinkButton from '../system/Button/LinkButton'
import { IItem } from './Item'
import ShirtDisplay from './itemDisplays/ShirtDisplay'

interface IFeatured {
  item: IItem
}

const FeaturedContainer = styled.section`
  position: relative;
  width: calc(65% - 1em);
  height: 80vh;
`

const FeaturedSign = styled(Title)`
  position: absolute;
  transform: rotate(-30deg);
  left: 0;
  top: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.status.error};
  z-index: 3;
  font-size: 4em;
  text-shadow: 4px 4px 0 ${({ theme }) => theme.status.ok},
    -4px -4px 0 ${({ theme }) => theme.status.warning},
    -4px 4px 0 ${({ theme }) => theme.status.warning},
    4px -4px 0 ${({ theme }) => theme.status.ok};
`

const orderButtonPosition: CSSProperties = {
  position: 'absolute',
  bottom: '.2em',
  left: '1em',
}

const Featured = ({ item }: IFeatured) => {
  return (
    <FeaturedContainer>
      <FeaturedSign>FEATURED</FeaturedSign>
      {item.type == 'tshirt' ? <ShirtDisplay item={item} /> : null}
      <LinkButton
        style={orderButtonPosition}
        size="large"
        variant="primary"
        href={`/article/${item.id}`}
      >
        CLICK TO ORDER
      </LinkButton>
    </FeaturedContainer>
  )
}

export default Featured
