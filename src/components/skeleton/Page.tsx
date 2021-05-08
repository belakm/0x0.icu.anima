import Head from 'next/head'
import Background from './Background'
import TopBar from './TopBar'
import Wrapper from '../containers/Wrapper'
import styled from 'styled-components'
import Footer from './Footer'

type IPage = {
  description: string
  title: string
  children: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

const PageWrapper = styled(Wrapper)`
  padding-top: 3em;
  padding-bottom: 2em;
  min-height: calc(100vh - 82px - 2em);
`

const Page: React.FunctionComponent<IPage> = ({
  children,
  description = '',
  title = 'Sitri 0x0.icu',
  metaTitle = 'Sitri 0x0.icu',
  metaDescription = "Sitri's personal website and store",
}: IPage) => (
  <main>
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Head>
    <TopBar />
    <PageWrapper>{children}</PageWrapper>
    <Footer />
    <Background />
  </main>
)
export default Page
