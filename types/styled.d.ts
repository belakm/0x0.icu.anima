import { theme } from '../src/themes/default'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}