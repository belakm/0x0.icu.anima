import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../components/common/Flex';
import Login from '../components/user/Login';
import Registration from '../components/user/Registration';

const Backdrop = styled.div`
  z-index: ${({ theme }) => theme.levels.modalBackdrop};
  background: rgba(0, 0, 0, 0.66);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`
interface IModalContext {
  openLoginModal: Function,
  openRegistrationModal: Function
}

export const ModalContext = createContext<IModalContext>({
  openLoginModal: () => {},
  openRegistrationModal: () => {}
})

export const ModalProvider = ({ children } : { children: React.ReactElement}) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const [loginDialogOpen, setLoginDialogOpen] = useState<boolean>(false)
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!isDialogOpen) {
      setLoginDialogOpen(false)
      setRegistrationDialogOpen(false)
    }
  }, [isDialogOpen])

  const modalProvider = {
    openLoginModal: () => {
      setDialogOpen(true)
      setLoginDialogOpen(true)
      setRegistrationDialogOpen(false)
    },
    openRegistrationModal: () => {
      setDialogOpen(true)
      setLoginDialogOpen(false)
      setRegistrationDialogOpen(true)
    }
  }
  
  const backdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("CAPTURE")
    if (e.target === e.currentTarget) {
      setDialogOpen(false)
    }
  }

  return <ModalContext.Provider value={modalProvider}>
    <p style={{color: 'white', marginTop: 100}}>STATUS: {loginDialogOpen.toString()} {registrationDialogOpen.toString()} {isDialogOpen.toString()}</p>
    {isDialogOpen && <Backdrop >
      <FlexColumn align="center center" style={{ height: '100%' }} onMouseDown={backdropClick}>
        {loginDialogOpen && <Login />}
        {registrationDialogOpen && <Registration />}
      </FlexColumn>
    </Backdrop>}
    {children}
  </ModalContext.Provider>
}

export default ModalContext