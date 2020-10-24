import React from 'react'
import Head from 'next/head'
import Background from './Background';
import TopBar from '../navigation/TopBar';

type PageProps = {
  description: string,
  title: string,
  children: React.ReactNode
}

const Page : React.FunctionComponent<PageProps> = ({ children, description = '', title = 'Lorenzo Pieri' } : PageProps) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description || title} />
    </Head>
    <TopBar />
    <div>{children}</div>
    <Background />
  </main>
)
export default Page