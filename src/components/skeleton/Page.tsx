import React from 'react'
import Head from 'next/head'
import Background from './Background'
import BrandTop from '../navigation/BrandTop'
import TopBar from '../navigation/TopBar'
import Wrapper from '../gallery/Wrapper'
import Frame from '../Win95/Frame/Frame'

type PageProps = {
  description: string
  title: string
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = ({
  children,
  description = '',
  title = 'Sitri 0x0.icu',
}: PageProps) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || title} />
    </Head>
    <TopBar />
    <Wrapper style={{ paddingTop: '2em' }}>
      <BrandTop />
      {children}
    </Wrapper>
    <Frame>
      <Wrapper>
        <p style={{ textAlign: 'center', fontSize: '2em' }}>
          Copyright @ 2020 - Sitri (
          <a href="mailto:sitri@0x0.icu">sitri@0x0.icu</a>)
        </p>
      </Wrapper>
    </Frame>
    <Background />
  </main>
)
export default Page
