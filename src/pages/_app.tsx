import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalAppStyle from '../theme/GlobalAppStyle'
import Theme from '../theme/themes/default/Theme'
import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={Theme}>
      <GlobalAppStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  </>
)
export default App
