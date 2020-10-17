import * as React from 'react'
import { render } from 'react-dom'
import { RouteComponentProps, Router } from '@reach/router'
import { ThemeProvider } from 'styled-components';
import Theme from './theme/themes/default/Default'
import Background from './components/skeleton/Background';

// Sites
import GlobalStyle from './theme/GlobalStyle';
import LandingPage from './components/sites/LandingPage';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

const App = () => (
  // future proofing app
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Router>
        <RouterPage path="/" pageComponent={<LandingPage />} />
      </Router>
      <Background />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

render(<App />, document.getElementById('root'));
