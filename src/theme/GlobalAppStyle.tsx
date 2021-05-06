import { createGlobalStyle } from 'styled-components'
import LineBeamWoff from '../../public/fonts/Linebeam/Linebeam.woff'
import LineBeamWoff2 from '../../public/fonts/Linebeam/Linebeam.woff2'
import LineBeamOtf from '../../public/fonts/Linebeam/Linebeam.otf'
import LineBeamSvg from '../../public/fonts/Linebeam/Linebeam.svg'
import LineBeamEot from '../../public/fonts/Linebeam/Linebeam.eot'
import LineBeamTtf from '../../public/fonts/Linebeam/Linebeam.ttf'

import pxSansWoff from '../../public/fonts/px_sans_nouveaux/px_sans_nouveaux.woff'
import pxSansWoff2 from '../../public/fonts/px_sans_nouveaux/px_sans_nouveaux.woff2'
import pxSansTtf from '../../public/fonts/px_sans_nouveaux/px_sans_nouveaux.ttf'

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
`

export default GlobalAppStyle
