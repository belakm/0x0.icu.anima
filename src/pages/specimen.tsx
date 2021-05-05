import { withUrqlClient } from 'next-urql'
import Gallery from '../components/gallery/Gallery'
import Page from '../components/skeleton/Page'
import Window, { WindowWrapper } from '../components/system/Window/Window'
import clientOptions from '../urql/client'

const PageSpecimen = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <Window
      title="About this collection"
      style={{ width: '100%', marginBottom: '1em' }}
    >
      <WindowWrapper>
        Heeey~~~! This are some of my newer and older works, that are dear to
        me.
      </WindowWrapper>
    </Window>
    <Gallery topic="PORTFOLIO" />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageSpecimen,
)
