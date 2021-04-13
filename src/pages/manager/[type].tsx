import Page from '../../components/skeleton/Page'
import { withUrqlClient } from 'next-urql'
import Cms from '../../components/cms/Cms'
import clientOptions from '../../urql/client'

const Manager = () => (
  <Page
    metaTitle="0x0_CONTENT_MANAGEMENT.SYS"
    title="0x0_CONTENT_MANAGEMENT.SYS"
    description=""
  >
    <Cms />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(Manager)
