import { createGlobalStyle } from 'styled-components'
import LineBeamWoff from '../../public/fonts/Linebeam/Linebeam.woff'
import LineBeamWoff2 from '../../public/fonts/Linebeam/Linebeam.woff2'
import LineBeamOtf from '../../public/fonts/Linebeam/Linebeam.otf'
import LineBeamSvg from '../../public/fonts/Linebeam/Linebeam.svg'
import LineBeamEot from '../../public/fonts/Linebeam/Linebeam.eot'
import LineBeamTtf from '../../public/fonts/Linebeam/Linebeam.ttf'

const GlobalAppStyle = createGlobalStyle`
  @font-face {
    font-family: "LinearBeam05";
    src: url(${LineBeamEot}); /* IE9 Compat Modes */
    src: url(${LineBeamOtf}) format("opentype"), /* Open Type Font */
      url(${LineBeamSvg}) format("svg"), /* Legacy iOS */
      url(${LineBeamTtf}) format("truetype"), /* Safari, Android, iOS */
      url(${LineBeamWoff}) format("woff"), /* Modern Browsers */
      url(${LineBeamWoff2}) format("woff2"); /* Modern Browsers */
    font-weight: 400;
    font-style: normal;
  }
`

export default GlobalAppStyle
