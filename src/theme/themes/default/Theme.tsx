// my-theme.ts
import { DefaultTheme } from 'styled-components'
import colorSettings from './settings/color-settings'

const Theme: DefaultTheme = {
  ...colorSettings,
  levels: {
    background: -9999,
    content: 0,
    static: 50,
    window: 100,
  },
}

export default Theme
