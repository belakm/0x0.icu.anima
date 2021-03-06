import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'

interface IBorderStyle {
  direction?: 'extrude' | 'intrude'
}

interface IBorder extends IBorderStyle {
  outerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>
  innerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>
  outerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>
  innerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

export const createBorder = ({
  direction,
  outerTopLeft,
  innerTopLeft,
  outerBottomRight,
  innerBottomRight,
}: IBorder) => css`
  border: 0;
  box-shadow: inset -1px -1px 0 0
      ${direction == 'extrude' ? outerBottomRight : innerTopLeft},
    inset 1px 1px 0 0
      ${direction == 'extrude' ? outerTopLeft : innerBottomRight},
    inset -2px -2px 0 0
      ${direction == 'extrude' ? innerBottomRight : outerTopLeft},
    inset 2px 2px 0 0
      ${direction == 'extrude' ? innerTopLeft : outerBottomRight};
`

export const border = ({ direction = 'extrude' }: IBorderStyle = {}) =>
  createBorder({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.system.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.system.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.system.borderLightest}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.system.borderLight}
    `,
  })

export const windowBorder = ({ direction = 'extrude' }: IBorderStyle = {}) =>
  createBorder({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.system.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.system.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.system.borderLight}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.system.borderLightest}
    `,
  })

export const scrollBarBorder = ({ direction = 'extrude' }: IBorderStyle = {}) =>
  createBorder({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.system.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.system.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.system.borderLight}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.system.borderLightest}
    `,
  })

export default border
