import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalAppStyle from '../theme/GlobalAppStyle'
import Theme from '../theme/themes/default/Theme'
import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'
import { LoginProvider } from '../contexts/LoginContext'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={Theme}>
      <GlobalAppStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AuthProvider>
          <LoginProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </LoginProvider>
      </AuthProvider>
    </ThemeProvider>
  </>
)
export default App
