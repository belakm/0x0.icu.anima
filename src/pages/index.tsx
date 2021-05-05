import Page from '../components/skeleton/Page'
import Gallery from '../components/gallery/Gallery'
import { withUrqlClient } from 'next-urql'
import clientOptions from '../urql/client'

const Index = () => (
  <Page
    metaTitle="0x0_KERNEL_PANIC"
    title="0w0, what is this?"
    description="Check these out!!!!!!!!"
  >
    <Gallery topic="KERNEL_PANIC" />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(Index)
