import React from 'react'
import Frame, { IFrame } from '../Frame/Frame'
import WindowTitleBar from '../WindowTitleBar/WindowTitleBar'

interface IWindow extends IFrame {
  children: React.ReactNode
  title: string
}
const Window = ({ children, title, width }: IWindow) => (
  <Frame width={width}>
    <WindowTitleBar title={title} />
    {children}
  </Frame>
)

export default Window