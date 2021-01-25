import styled from 'styled-components'
import CSS from 'csstype'
import { windowBorder } from '../Border'
import WindowTitleBar from './WindowTitleBar'

type pxInput =
  | number
  | CSS.Property.Width
  | CSS.Property.Height
  | CSS.Property.MinHeight
  | CSS.Property.MinWidth
interface WindowProps {
  width?: CSS.Property.Width | number
  height?: CSS.Property.Height | number
  minHeight?: CSS.Property.MinHeight | number
  minWidth?: CSS.Property.MinWidth | number
  direction?: CSS.Property.FlexDirection
}

const isNumeric = (input: string | number) => {
  return typeof input == 'string' && !Number.isNaN(parseFloat(input))
}

const toPxUnits = (input: pxInput | undefined) => {
  return input && isNumeric(input.toString()) ? `${input}px` : input
}

export const StyledWindow = styled.section<WindowProps>`
  ${windowBorder()}
  background: ${({ theme }) => theme.win95.material};
  color: ${({ theme }) => theme.win95.materialText};
  width: ${({ width }) => toPxUnits(width)};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => toPxUnits(height)};
  min-height: ${({ minHeight }) => minHeight};
  padding: 3px;
  display: flex;
  flex-direction: ${({ direction }) => direction}; ;
`
StyledWindow.defaultProps = {
  width: 'auto',
  height: 'auto',
  direction: 'column',
}

interface IWindow extends WindowProps {
  children: React.ReactNode
  title: string
}
const Window = ({ children, title, width }: IWindow) => (
  <StyledWindow width={width}>
    <WindowTitleBar title={title} />
    {children}
  </StyledWindow>
)

export default Window
