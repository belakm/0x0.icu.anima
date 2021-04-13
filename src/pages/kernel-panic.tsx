import { withUrqlClient } from 'next-urql'
import KernelPanic from '../components/kernel-panic/KernelPanic'
import Page from '../components/skeleton/Page'
import clientOptions from '../urql/client'

const PageKernelPanic = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <KernelPanic />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageKernelPanic,
)
