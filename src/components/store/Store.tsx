import { FlexRow } from '../common/Flex'
import { Article, PageTitle, Paragraph } from '../common/Typography'
import LinkButton from '../system/Button/LinkButton'
import Window, { WindowWrapper } from '../system/Window/Window'
import Featured from './Featured'
import { IItem } from './Item'

const exampleItem: IItem = {
  id: 0,
  name: 'PERSONAL DATA PAYPIG',
  description: 'Hot shit',
  price: 20,
  currency: 'EUR',
  mediaType: 'data:png',
  media: '',
  type: 'tshirt',
}

const Store = () => {
  return (
    <>
      <FlexRow style={{ marginBottom: '2em' }}>
        <Featured item={exampleItem} />
      </FlexRow>
      <Window>
        <WindowWrapper>
          <Article>
            <PageTitle>0x0_NETWORK</PageTitle>
            <Paragraph>
              We are on a mission to spread neo-cyber-punk to whomever listens.
              This project came as a corona fever dream, and we made it happen.
            </Paragraph>
            <Paragraph>
              Us? Nina and Mitja Belak. Wanna make sure we arent here to scam
              you? <LinkButton href="/about">LEARN MORE ABOUT US</LinkButton>
            </Paragraph>
            <Paragraph></Paragraph>
          </Article>
        </WindowWrapper>
      </Window>
    </>
  )
}

export default Store
