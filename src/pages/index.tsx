import Page from '../components/skeleton/Page'
import Gallery from '../components/gallery/Gallery'
import { withUrqlClient } from 'next-urql'

const Index = () => (
  <Page
    metaTitle="0x0_KERNEL_PANIC"
    title="0w0, what is this?"
    description="Check these out!!!!!!!!"
  >
    <Gallery />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:5433/graphql',
  fetchOptions: () => {
    return {}
  },
}))(Index)
