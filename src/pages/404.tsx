import Page from '../components/skeleton/Page'
import Error404 from '../components/skeleton/Error404'
import { withUrqlClient } from 'next-urql'
import clientOptions from '../urql/client'

const Index = () => (
  <Page
    metaTitle="0x0_ERROR_404"
    title="Ummm, doesn't seem to exist. I am sorry."
    description="The requested page does not exist."
  >
    <Error404 />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(Index)
