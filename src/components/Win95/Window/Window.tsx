import { CSSProperties } from 'react'
import styled from 'styled-components'
import Frame, { IFrame } from '../Frame/Frame'
import WindowTitleBar from '../WindowTitleBar/WindowTitleBar'

export const WindowWrapper = styled.div`
  padding: 0.2em;
  overflow-y: auto;
`

export interface IWindow extends IFrame {
  children: React.ReactNode
  title?: string
  style?: CSSProperties
}
const Window = ({ children, title, width, style }: IWindow) => (
  <Frame width={width} style={style}>
    <WindowTitleBar title={title || '0x0_Window'} />
    {children}
  </Frame>
)

export default Window
