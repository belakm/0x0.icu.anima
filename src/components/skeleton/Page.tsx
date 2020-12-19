import React from 'react'
import Head from 'next/head'
import Background from './Background'
import BrandTop from '../BrandTop/BrandTop'

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
    <BrandTop />
    <div>
      <div>
        <Background />
        {children}
      </div>
    </div>
    <div>
      <p style={{ textAlign: 'center', fontSize: '2em' }}>
        Copyright @ 2020 - Sitri (
        <a href="mailto:sitri@0x0.icu">sitri@0x0.icu</a>)
      </p>
    </div>
  </main>
)
export default Page
