import Page from '../components/skeleton/Page'
import { withUrqlClient } from 'next-urql'
import clientOptions from '../urql/client'
import Store from '../components/store/Store'

const Index = () => (
  <Page
    metaTitle="0x0.icu"
    title="0x0.icu "
    description="Check these out!!!!!!!!"
  >
    <Store />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(Index)
