import {
  ISystemColors,
  IStatusColors,
  IBackgroundColors,
  IStoreColors,
  ITypographyColors,
} from 'styled-components'

interface IColorSettings {
  background: IBackgroundColors
  system: ISystemColors
  status: IStatusColors
  store: IStoreColors
  typography: ITypographyColors
}

const colorSettings: IColorSettings = {
  background: {
    lineThick: 'hsla(130,100%, 50%, .14)',
    lineThin: 'hsla(130,100%, 50%, .12)',
    background: 'black',
  },
  system: {
    anchor: 'white',
    anchorVisited: '#ffc400',
    borderDark: '#282828',
    borderDarkest: '#000000',
    borderLight: '#656565',
    borderLightest: '#a7a7a7',
    canvas: '#c0c0c0',
    canvasText: '#000000',
    canvasTextDisabled: '#282828',
    canvasTextDisabledShadow: '#ff0000',
    canvasTextInvert: '#ffffff',
    headerBackground: '#000000',
    headerNotActiveBackground: '#7f7f7f',
    headerNotActiveText: '#2b2b2b',
    headerText: '#ffb1f2',
    material: '#2b2b2b',
    materialDark: '#282828',
    materialText: '#35ff3f',
    materialTextDisabled: '#282828',
    materialTextDisabledShadow: '#4d3048',
    materialTextInvert: '#ffffff',
    progress: '#000000',
    tooltip: '#fefbcc',
    terminal: '#2b2b2b',
    terminalText: 'white',
    primaryMaterial: '#0000ff',
    primaryMaterialText: '#ffffff',
    borderBoxBorderDefault: '#ffffff',
    borderBoxBorderPrimary: '#35ff3f',
    borderBoxBorderSecondary: '#ff009d',
    borderBoxBackground: 'rgba(0, 0, 0, 0.66)',
  },
  status: {
    ok: '#35ff3f',
    error: '#ff009d',
    warning: '#ff5e00',
  },
  typography: {
    text: '#ffffff',
  },
  store: {
    featuredText: '#ff0095',
    featuredBorderTopLeft: '#ffffff',
    featuredBorderBottomRight: '#000000',
    priceBackground: '#ffffff',
    priceText: '#ff0095',
  },
}

export default colorSettings
