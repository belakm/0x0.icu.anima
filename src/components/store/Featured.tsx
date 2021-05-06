import styled from 'styled-components'
import { FlexColumn } from '../common/Flex'
import { SubTitle, Title } from '../common/Typography'
import LinkButton from '../system/Button/LinkButton'
import Window, { WindowWrapper } from '../system/Window/Window'
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
`

const Featured = ({ item }: IFeatured) => {
  return (
    <FeaturedContainer>
      <FeaturedSign>FEATURED</FeaturedSign>
      {item.type == 'tshirt' ? <ShirtDisplay item={item} /> : null}
      <Window
        title="FEATURED ARTICLE"
        style={{ position: 'absolute', bottom: '-1em', left: 50 }}
      >
        <WindowWrapper>
          <FlexColumn>
            <SubTitle>{item.name}</SubTitle>
            <LinkButton variant="primary" href={`/article/${item.id}`}>
              NICE, I WANT ONE!
            </LinkButton>
          </FlexColumn>
        </WindowWrapper>
      </Window>
    </FeaturedContainer>
  )
}

export default Featured
