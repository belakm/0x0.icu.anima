import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/default'
import Background from './components/Background'
import Header from './components/Header'

interface AppProps {}

function App({}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Background></Background>
      <Header>Hello</Header>
      
    </ThemeProvider>
  );
}

export default App;
