import { withUrqlClient } from 'next-urql'
import Gallery from '../components/gallery/Gallery'
import Page from '../components/skeleton/Page'
import Window, { WindowWrapper } from '../components/system/Window/Window'
import clientOptions from '../urql/client'

const PageKernelPanic = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <Window title="About us" style={{ width: '100%', marginBottom: '1em' }}>
      <WindowWrapper>Mitja and Nina Belak.</WindowWrapper>
    </Window>
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageKernelPanic,
)
