import 'styled-components'

// and extend them!
declare module 'styled-components' {

  export interface ColorDefinition {
    backgroundPattern: {
      lineThick: string,
      lineThin: string,
      background: string
    },
    status: {
      ok: string
      error: string
      warning: string
    }
  }

  export interface LevelsDefinition {
    background: number,
    window: number,
    content: number,
  }

  export interface DefaultTheme {
    colors: ColorDefinition,
    levels: LevelsDefinition
  }
}