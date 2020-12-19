import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalAppStyle from '../theme/GlobalAppStyle'
import Theme from '../theme/themes/default/Theme'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/x-icon" />
    </Head>
    <ThemeProvider theme={Theme}>
      <GlobalAppStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)
export default App
