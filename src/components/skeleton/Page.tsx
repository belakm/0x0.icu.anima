import * as React from 'react';
import Head from 'next/head'
import Background from './Background'
import BrandTop from './BrandTop'
import TopBar from './TopBar'
import Wrapper from '../gallery/Wrapper'
import styled from 'styled-components'
import Footer from './Footer'

type IPage = {
  description: string
  title: string
  children: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

const MainWrapper = styled(Wrapper)`
  padding: 5em 0 3em;
  min-height: calc(100vh - 11em);
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
    <MainWrapper>
      <BrandTop title={title} description={description} />
      {children}
    </MainWrapper>
    <Footer />
    <Background />
  </main>
)
export default Page
