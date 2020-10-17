import { createGlobalStyle } from 'styled-components'
import ResetStyle from './ResetStyle'

const GlobalStyle = createGlobalStyle`
  // reset style
  ${() => ResetStyle}
  // define font
  html,
  body {
    font-family: 'Inter', sans-serif;
  }
  // define fonts
  p, h1, h2, h3, h4, h5, h6, li {
    line-height: 1.5;
  }
  p, h6 {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: .4em;
  }
  li {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: .1em;
  }
  h1 {
    font-size: 4.2em;
    font-weight: 300;
    margin: .4em 0;
    color: ${props => props.theme.colors.brand.normal}
  }
  h2 {
    font-size: 3.15em;
    font-weight: 400;
    margin: .3em 0;
    color: ${props => props.theme.colors.brand.dark}
  }
  h3 {
    font-size: 2.37em;
    font-weight: 500;
    margin: 1em 0 .3em;
    color: ${props => props.theme.colors.brand.dark}
  }
  h4 {
    font-size: 1.77em;
    font-weight: 700;
    margin: .2em 0 .3em;
  }
  h5 {
    font-size: 1.33em;
    font-weight: 700;
    margin-bottom: .2em;
  }
  // define colors
  body {
    color: ${props => props.theme.colors.dark.dark}
  }
`

export default GlobalStyle
