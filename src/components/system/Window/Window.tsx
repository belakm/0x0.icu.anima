import { CSSProperties } from 'react'
import styled from 'styled-components'
import Frame, { IFrame } from '../Frame/Frame'
import WindowTitleBar, {
  ITitleBarOption,
} from '../WindowTitleBar/WindowTitleBar'

export const WindowWrapper = styled.div`
  padding: 0.5rem;
  overflow-y: auto;
`

export interface IWindow extends IFrame {
  children: React.ReactNode
  title?: string
  style?: CSSProperties
  isTerminal?: boolean
  options?: ITitleBarOption[]
}
const Window = ({
  children,
  title,
  width,
  style,
  options,
  isTerminal,
}: IWindow) => (
  <Frame width={width} style={style} isTerminal={isTerminal}>
    <WindowTitleBar options={options} title={title || '0x0_Window'} />
    {children}
  </Frame>
)

export default Window
