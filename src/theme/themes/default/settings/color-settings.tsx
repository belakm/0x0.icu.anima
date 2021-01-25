import {
  IWindowsColors,
  IStatusColors,
  IBackgroundColors,
} from 'styled-components'

interface IColorSettings {
  background: IBackgroundColors
  win95: IWindowsColors
  status: IStatusColors
}

const colorSettings: IColorSettings = {
  background: {
    lineThick: 'hsla(130,100%, 50%, .36)',
    lineThin: 'hsla(130,100%, 50%, .28)',
    background: 'black',
  },
  win95: {
    anchor: '#1034a6',
    anchorVisited: '#440381',
    borderDark: '#8a5b68',
    borderDarkest: '#26030b',
    borderLight: '#e5bec8',
    borderLightest: '#f1d4dc',
    canvas: '#ffffff',
    canvasText: '#050608',
    canvasTextDisabled: '#8a5b68',
    canvasTextDisabledShadow: '#f1d4dc',
    canvasTextInvert: '#ffffff',
    headerBackground: '#ab5a71',
    headerNotActiveBackground: '#a19fa5',
    headerNotActiveText: '#615f68',
    headerText: '#ffffff',
    material: '#d6adb8',
    materialDark: '#9a9e9c',
    materialText: '#050608',
    materialTextDisabled: '#8a5b68',
    materialTextDisabledShadow: '#f1d4dc',
    materialTextInvert: '#ffffff',
    progress: '#ab5a71',
    tooltip: '#fefbcc',
  },
  status: {
    ok: 'green',
    error: 'red',
    warning: 'yellow',
  },
}

export default colorSettings
