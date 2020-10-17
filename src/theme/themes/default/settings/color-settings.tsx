import { ColorDefinition } from 'styled-components'

const colorSettings : ColorDefinition = {
  background: 'hsl(120, 4%, 91%)',
  brand: {
    darkest: 'hsl(335, 66%, 11%)',
    dark: 'hsl(332, 75%, 20%)',
    normal: 'hsl(330, 78%, 29%)',
    light: 'hsl(342, 43%, 47%)',
    lightest: 'hsl(357, 63%, 67%)'
  },
  accent: {
    darkest: 'hsl(36, 54%, 11%)',
    dark: 'hsl(32, 59%, 20%)',
    normal: 'hsl(30, 61%, 29%)',
    light: 'hsl(44, 38%, 47%)',
    lightest: 'hsl(61, 51%, 67%)'
  },
  neutral: {
    darkest: 'hsl(174, 66%, 11%)',
    dark: 'hsl(171, 75%, 20%)',
    normal: 'hsl(168, 78%, 29%)',
    light: 'hsl(180, 43%, 47%)',
    lightest: 'hsl(195, 63%, 67%)'
  },
  light: {
    darkest: 'hsl(0, 0%, 52.2%)',
    dark: 'hsl(0, 0%, 63.5%)',
    normal: 'hsl(0, 0%, 75.3%)',
    light: 'hsl(0, 0%, 87.5%)',
    lightest: 'hsl(0, 0%, 93.75%)'
  },
  dark: {
    darkest: 'hsl(0, 0%, 6.5%)',
    dark: 'hsl(0, 0%, 11.8%)',
    normal: 'hsl(0, 0%, 20.8%)',
    light: 'hsl(0, 0%, 30.6%)',
    lightest: 'hsl(0, 0%, 41.2%)'
  },
  status: {
    ok: 'hsl(90, 78%, 36%)',
    critical: 'hsl(356, 100%, 29%)',
    error: 'hsl(0, 100%, 35%)',
    warning: 'hsl(47, 100%, 47%)',
    unknown: 'hsl(169, 18%, 36%)',
    disabled: 'hsl(169, 9%, 36%)',
  }
}

export default colorSettings