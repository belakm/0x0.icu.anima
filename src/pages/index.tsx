import Page from '../components/skeleton/Page'
import { withUrqlClient } from 'next-urql'
import clientOptions from '../urql/client'
import { FlexRow } from '../components/common/Flex'
import StoreItem from '../components/store/StoreItem'
import Window, { WindowWrapper } from '../components/system/Window/Window'
import { Article, PageTitle, Paragraph } from '../components/common/Typography'
import LinkButton from '../components/system/Button/LinkButton'

const Index = () => (
  <Page
    metaTitle="0x0.icu"
    title="0x0.icu "
    description="Check these out!!!!!!!!"
  >
    <FlexRow style={{ marginBottom: '1em' }}>
      <StoreItem
        type="shirt"
        style={{ marginRight: '.5em', width: '50%' }}
        name="PERSONAL DATA PAYPIG"
        image="/images/articles/print_paypig.png"
        price={20}
        currency={'EUR'}
        description="For those sending way too much money UwU. Get this premier t-shirt here."
      />
      <StoreItem
        type="simple"
        style={{ marginLeft: '.5em', width: '50%' }}
        name="0x0_SPECIMEN"
        image="/images/products/0x0_specimen_showcase.png"
        price={5}
        currency={'ADA'}
        description="SOON! We are minting some fresh NFTs on ADA Cardano - hot and beautiful Cyber-Monster-Girls!"
      />
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
            Us? Nina and Mitja Belak. Wanna make sure we arent here to scam you?{' '}
            <LinkButton href="/about">LEARN MORE ABOUT US</LinkButton>
          </Paragraph>
          <Paragraph></Paragraph>
        </Article>
      </WindowWrapper>
    </Window>
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(Index)
