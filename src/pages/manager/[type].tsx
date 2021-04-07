import Page from '../../components/skeleton/Page'
import { withUrqlClient } from 'next-urql'
import Cms from '../../components/cms/Cms'

const Manager = () => (
  <Page
    metaTitle="0x0_CONTENT_MANAGEMENT.SYS"
    title="0x0_CONTENT_MANAGEMENT.SYS"
    description=""
  >
    <Cms />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:5433/graphql',
  fetchOptions: () => {
    return {}
  },
}))(Manager)