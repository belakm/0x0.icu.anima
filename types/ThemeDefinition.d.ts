import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface IStatusColors {
    ok: string
    error: string
    warning: string
  }

  export interface IBackgroundColors {
    lineThick: string
    lineThin: string
    background: string
  }

  export interface ISystemColors {
    anchor: string
    anchorVisited: string
    borderDark: string
    borderDarkest: string
    borderLight: string
    borderLightest: string
    canvas: string
    canvasText: string
    canvasTextDisabled: string
    canvasTextDisabledShadow: string
    canvasTextInvert: string
    headerBackground: string
    headerNotActiveBackground: string
    headerNotActiveText: string
    headerText: string
    material: string
    materialDark: string
    materialText: string
    materialTextDisabled: string
    materialTextDisabledShadow: string
    materialTextInvert: string
    tooltip: string
    progress: string
    terminal: string
    terminalText: string
    terminalTextSuccess: string
    terminalTextFail: string
  }

  export interface LevelsDefinition {
    background: number
    window: number
    content: number
    static: number
    modal: number
    modalBackdrop: number
  }

  export interface DefaultTheme {
    background: IBackgroundColors
    status: IStatusColors
    system: ISystemColors
    levels: LevelsDefinition
    font: string
  }
}
