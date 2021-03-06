import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import LoginContext, { LoginProvider } from './LoginContext';

const Backdrop = styled.div`
  z-index: ${({ theme }) => theme.levels.modalBackdrop};
  background: rgba(0, 0, 0, 0.66);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`
interface IModalContext {
  openLoginModal: Function
}

export const ModalContext = createContext<IModalContext>({
  openLoginModal: () => {}
})

export const ModalProvider = ({ children } : { children: React.ReactElement}) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const loginContext = useContext(LoginContext)
  const loginProvider = {
    openLoginModal: () => {
      setDialogOpen(true)
      loginContext.openModal()
    }
  }

  return <ModalContext.Provider value={loginProvider}>
    {isDialogOpen && <Backdrop onClick={() => setDialogOpen(false)} />}
    {children}
  </ModalContext.Provider>
}

export default ModalContext