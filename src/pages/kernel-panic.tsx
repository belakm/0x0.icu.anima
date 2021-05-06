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
    <Window
      title="About Kernel Panic"
      style={{ width: '100%', marginBottom: '1em' }}
    >
      <WindowWrapper>
        KERNEL_PANIC is a collection of graphics and illustrations aimed at
        cyber reality.
      </WindowWrapper>
    </Window>
    <Gallery topic="KERNEL_PANIC" />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageKernelPanic,
)
