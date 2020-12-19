import 'styled-components'
import { R95DefaultTheme } from '@react95/core/_types/theme'

// and extend them!
declare module 'styled-components' {

  export interface ThemeShades {
    dark: string
    darkest: string
    normal: string
    light: string
    lightest: string
  }

  export interface ColorDefinition {
    background: string
    brand: ThemeShades
    accent: ThemeShades
    neutral: ThemeShades
    light: ThemeShades
    dark: ThemeShades
    status: {
      ok: string
      critical: string
      error: string
      warning: string
      unknown: string
      disabled: string
    }
  }

  export interface LevelsDefinition {
    background: number,
    window: number,
    windowFullscreen,
    content: number,
  }

  export interface DefaultTheme extends R95DefaultTheme {
    appColors: ColorDefinition
    levels: LevelsDefinition
  }
}