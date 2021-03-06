import React from 'react'
import styled from 'styled-components'
import Window, { IWindow } from '../Win95/Window/Window'
import { FlexRow } from './Flex'

const StyledModal = styled.div`
  z-index: ${({theme}) => theme.levels.modal};
  position: relative;
`

interface IModal extends IWindow {}

const Modal = ({ children, title, width } : IModal) => {
  return <StyledModal>
    <Window title={title} width={width}>
      {children}
    </Window>
  </StyledModal>
}

export default Modal