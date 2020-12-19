import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@react95/core'
import Icons from '@react95/icons'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalAppStyle from '../theme/GlobalAppStyle'
import Theme from '../theme/themes/default/Theme'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/x-icon" href={Icons.curves_and_colors_100} />
    </Head>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <GlobalAppStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)
export default App
