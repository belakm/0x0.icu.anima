import { withUrqlClient } from 'next-urql'
import Page from '../components/skeleton/Page'
import Store from '../components/store/Store'
import clientOptions from '../urql/client'

const PageStore = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <Store />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(PageStore)
