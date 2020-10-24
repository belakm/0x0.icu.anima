// my-theme.ts
import { DefaultTheme } from 'styled-components'
import { Colors } from '@react95/core/ThemeProvider/theme' 
import colorSettings from './settings/color-settings'

const colors = new Colors({
  grays: ['#d6adb8', '#9a9e9c', '#c3c7cb', '#868a8e'],
  black: '#000000',
  white: '#ffffff',
  primary: '#ab5a71',
  secondary: '#5a6dab',
});

const Theme: DefaultTheme = {
  appColors: colorSettings,
  colors,
  window: {
    color: {
      // headers
      headerBackground: '#ab5a71',
      headerText: '#ffffff',
      headerNotActiveBackground: '#a19fa5',
      headerNotActiveText: '#615f68',
      // content background
      canvas: '#ffffff',
      // window background
      background: '#d6adb8',
      backgroundDark: '#9a9e9c',
      // text
      text: '#0a0a0a',
      textInvert: '#fefefe',
      textDisabled: '#848584',
      textDisabledShadow: '#fefefe',
      canvasText: '#0a0a0a',
      canvasTextInvert: '#fefefe',
      canvasTextDisabled: '#848584',
      canvasTextDisabledShadow: '#fefefe',
    },
    padding: '.5em'
  },
  shadows: {
    out: `inset 0.5px 0.5px 0px 0.5px ${colors.white},
          inset 0 0 0 1px ${colors.grays[3]},
          1px 0px 0 0px ${colors.black},
          0px 1px 0 0px ${colors.black},
          1px 1px 0 0px ${colors.black}`,
    in: `inset 0px 0px 0px 0px,
        inset 1px 1px 0px 0px ${colors.grays[3]},
        0.5px 0.5px 0px 0.5px ${colors.white}`,
    input: `inset -1px -1px 0 0 ${colors.grays[2]},
            inset 1px 1px 0 0 ${colors.black},
            0.5px 0.5px 0 0.5px ${colors.white}`,
  },
  levels: {
    background: -9999,
    content: 0,
    window: 100
  }
}

export default Theme


// eslint-disable-next-line spaced-comment
/*themes.rose = {
  name: 'rose',
  canvas: '#ffffff',
  material: '#d6adb8',
  materialDark: '#9a9e9c',

  borderDarkest: '#26030b',
  borderLightest: '#f1d4dc',
  borderDark: '#8a5b68',
  checkmarkDisabled: '#8a5b68',
  borderLight: '#e5bec8',

  headerBackground: '#ab5a71',
  headerText: '#ffffff',
  headerNotActiveBackground: '#a19fa5',
  headerNotActiveText: '#615f68',

  materialText: '#050608',
  materialTextInvert: '#ffffff',
  materialTextDisabled: '#8a5b68',
  materialTextDisabledShadow: '#f1d4dc',

  canvasText: '#050608',
  canvasTextInvert: '#ffffff',
  canvasTextDisabled: '#8a5b68',
  canvasTextDisabledShadow: '#f1d4dc',

  tooltip: '#fefbcc',

  anchor: '#1034a6',
  anchorVisited: '#440381',

  hoverBackground: '#ab5a71',
  checkmark: '#050608',

  progress: '#ab5a71',

  flatLight: '#d8d8d8',
  flatDark: '#9e9e9e',
  focusSecondary: '#fefe03'
};*/