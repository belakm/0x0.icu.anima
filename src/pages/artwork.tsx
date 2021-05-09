import { withUrqlClient } from 'next-urql'
import Gallery from '../components/gallery/Gallery'
import Page from '../components/skeleton/Page'
import BorderBox from '../components/system/BorderBox/BorderBox'
import Window, { WindowWrapper } from '../components/system/Window/Window'
import {
  Article,
  PageTitle,
  Paragraph,
} from '../components/typography/Typography'
import clientOptions from '../urql/client'

const PageKernelPanic = () => (
  <Page
    metaTitle="0x0.icu ARTWORK"
    metaDescription="Aggregated and selected works of Nina Belak alias Sitri"
  >
    <BorderBox
      title="Short message about this artwork"
      type="secondary"
      style={{ width: '100%', marginBottom: '1em' }}
    >
      <Article>
        <PageTitle>SITRI's artworks</PageTitle>
        <Paragraph>
          Hey there! These are some of my selected artworks (illustrations) that
          i've done over these years.
        </Paragraph>
        <Paragraph>
          My art revolves around cute shit and cyber lust. I like to study
          animals and people (i think you can tell). I love crazy color combos
          but i also love cute and memey things. Anyway, have a look ~~~
        </Paragraph>
        <Paragraph>
          <em>
            <small>Nina Belak</small> alias <big>SITRI</big>
          </em>
        </Paragraph>
      </Article>
    </BorderBox>
    <Gallery />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(
  PageKernelPanic,
)
