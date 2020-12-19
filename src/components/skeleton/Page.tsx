import React from 'react'
import Head from 'next/head'
import { Panel } from '@react95/core'
import Background from './Background'
import TopBar from '../navigation/TopBar'

type PageProps = {
  description: string
  title: string
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = ({
  children,
  description = '',
  title = 'Lorenzo Pieri',
}: PageProps) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || title} />
    </Head>
    <TopBar />
    <Panel shadow="none" padding="1em">
      <Panel shadow="intrude" style={{ position: 'relative' }}>
        <Background />
        {children}
      </Panel>
    </Panel>
    <Panel shadow="none">
      <p style={{ textAlign: 'center', fontSize: '2em' }}>
        Copyright @ 2020 - Sitri (
        <a href="mailto:sitri@0x0.icu">sitri@0x0.icu</a>)
      </p>
    </Panel>
  </main>
)
export default Page
