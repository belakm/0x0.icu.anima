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
    headerNotActiveText: '#535353',
    headerText: '#ffb1f2',
    material: '#535353',
    materialDark: '#282828',
    materialText: '#35ff3f',
    materialTextDisabled: '#282828',
    materialTextDisabledShadow: '#ffb1f2',
    materialTextInvert: '#ffffff',
    progress: '#000000',
    tooltip: '#fefbcc',
  },
  status: {
    ok: '#35ff3f',
    error: 'red',
    warning: 'yellow',
  },
}

export default colorSettings
