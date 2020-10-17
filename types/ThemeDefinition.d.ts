// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {

  interface ThemeShades {
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

  interface LevelsDefinition {
    background: number,
    content: number,
  }

  export interface DefaultTheme {
    colors: ColorDefinition,
    levels: LevelsDefinition
  }
}