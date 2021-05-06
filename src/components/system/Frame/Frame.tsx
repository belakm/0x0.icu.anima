import styled from 'styled-components'
import CSS from 'csstype'
import { windowBorder } from '../Border'

type pxInput =
  | number
  | CSS.Property.Width
  | CSS.Property.Height
  | CSS.Property.MinHeight
  | CSS.Property.MinWidth

export interface IFrame {
  width?: CSS.Property.Width | number
  height?: CSS.Property.Height | number
  minHeight?: CSS.Property.MinHeight | number
  minWidth?: CSS.Property.MinWidth | number
  direction?: CSS.Property.FlexDirection
  intrusion?: 'intrude' | 'extrude'
  background?: CSS.Property.BackgroundColor
  isTerminal?: boolean
}

const isNumeric = (input: string | number) => {
  return typeof input == 'string' && !Number.isNaN(parseFloat(input))
}

const toPxUnits = (input: pxInput | undefined) => {
  return input && isNumeric(input.toString()) ? `${input}px` : input
}

const Frame = styled.section<IFrame>`
  ${({ intrusion }) => windowBorder({ direction: intrusion })}
  background: ${({ theme, isTerminal }) =>
    isTerminal ? theme.system.terminal : theme.system.material};
  color: ${({ theme, isTerminal }) =>
    isTerminal ? theme.system.terminalText : theme.system.materialText};
  width: ${({ width }) => toPxUnits(width)};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => toPxUnits(height)};
  min-height: ${({ minHeight }) => minHeight};
  padding: 3px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  font-family: 'Share Tech Mono', monospace;
`
Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
  direction: 'column',
}

export default Frame
