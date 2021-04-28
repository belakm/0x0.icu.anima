import { withUrqlClient } from 'next-urql'
import Gallery from '../components/gallery/Gallery'
import Page from '../components/skeleton/Page'
import Window from '../components/Win95/Window/Window'
import clientOptions from '../urql/client'

const PageKernelPanic = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <Window title="Nigga what" style={{ width: '100%', marginBottom: '1em' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Window>
    <Gallery />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageKernelPanic,
)
