// my-theme.ts
import baseStyled, { ThemedStyledInterface } from 'styled-components'

// https://coolors.co/202030-39304a-cfb3cd-dfc2f2-c3fb57

let toHSLstring: (colorArray: Array<number>) => string = function (
  colorArray: Array<number>
) : string {
  return `hsl(${colorArray[0]}, ${colorArray[1]}%, ${colorArray[2]}%)`;
};

let repairHSL2 = function (
  colorArray: Array<number>
) : string {
  return `${colorArray[0]}, `;
};


export const theme = {
  // COLORS
  colors: {
    violet: toHSLstring([261, 35, 29]),
    background: toHSLstring([240, 20, 16]),
    ooze: toHSLstring([80, 95, 66]),
    pink: toHSLstring([304, 23, 76]),
    thistle: toHSLstring([276, 65, 85]),
    font: toHSLstring([0, 100, 100])
  },
  // FONTS
  fontSizes: {
    header: '1.4em',
    large: '1.1em',
    normal: '1em',
    small: '.8em',
  },
  // LEVELS
  zLevels: {
    background: -999
  }
}
