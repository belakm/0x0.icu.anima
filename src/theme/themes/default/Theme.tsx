// my-theme.ts
import win95 from '@react95/core/ThemeProvider/themes/win95'
import { DefaultTheme } from 'styled-components'
import colorSettings from './settings/color-settings'

const Theme: DefaultTheme = {
  ...win95,
  appColors: colorSettings,
  levels: {
    background: -9999,
    content: 0,
    window: 100,
    windowFullscreen: 1000,
  },
}

export default Theme
