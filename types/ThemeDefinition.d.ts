import 'styled-components'
import { IColors, IShadows } from '@react95/core/ThemeProvider/theme';

// and extend them!
declare module 'styled-components' {
  export interface IWindow {
    color: {
      // window header
      headerBackground: string
      headerText: string
      headerNotActiveBackground: string
      headerNotActiveText: string,
      // window bg
      background: string,
      // disabled window bg
      backgroundDark: string,
      // help menu for example bg
      canvas: string,
      // text
      text: string,
      textInvert: string,
      textDisabled: string,
      textDisabledShadow: string,
      canvasText: string,
      canvasTextInvert: string,
      canvasTextDisabled: string,
      canvasTextDisabledShadow: string,
    },
    padding: string
  }

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
    content: number,
  }

  export interface DefaultTheme {
    appColors: ColorDefinition
    levels: LevelsDefinition
    window: IWindow
    shadows: IShadows,
    colors: IColors
  }
}