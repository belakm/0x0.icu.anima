import { createGlobalStyle } from 'styled-components'
import { createScrollbars } from '../components/system/Scrollbar'

const GlobalAppStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font};
  }

  a {
    color: ${({ theme }) => theme.system.anchor};
    :visited {
      color: ${({ theme }) => theme.system.anchorVisited};
    }
  }
  
  // scrollbar
  ${createScrollbars()}
`

export default GlobalAppStyle
