import { createContext, useState } from 'react';
import * as React from 'react';
import styled from 'styled-components'
import { FlexColumn } from '../components/common/Flex'
import UrqlProvider from '../components/graphql/UrqlProvider'
import Login, { ILogin } from '../components/user/Login'
import Registration from '../components/user/Registration'

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
  closeAllModals: Function
  openLoginModal: Function
  openRegistrationModal: Function
}

interface IDialogStates {
  login: {
    open: boolean
    message?: React.ReactNode
  }
  register: {
    open: boolean
  }
}

export const ModalContext = createContext<IModalContext>({
  closeAllModals: () => {},
  openLoginModal: () => {},
  openRegistrationModal: () => {},
})

export const ModalProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const [dialogStates, setDialogStates] = useState<IDialogStates>({
    login: {
      open: false,
    },
    register: {
      open: false,
    },
  })

  const closeAllModals = () => {
    setDialogStates(
      Object.keys(dialogStates).reduce(
        (a, d) => ({ ...a, [d]: { open: false } }),
        dialogStates,
      ),
    )
    setDialogOpen(false)
  }

  const openDialog = ({
    dialog,
    message,
  }: {
    dialog: keyof IDialogStates
    message?: React.ReactNode
  }) => {
    const closedDialogStates = Object.keys(dialogStates).reduce(
      (a, d) => ({ ...a, [d]: { open: false } }),
      dialogStates,
    )
    setDialogStates({
      ...closedDialogStates,
      [dialog]: {
        open: true,
        ...(message != null && { message }),
      },
    })
  }

  const modalProvider = {
    closeAllModals,
    openLoginModal: ({ message }: ILogin) => {
      setDialogOpen(true)
      openDialog({ dialog: 'login', message })
    },
    openRegistrationModal: () => {
      setDialogOpen(true)
      openDialog({ dialog: 'register' })
    },
  }

  const backdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setDialogOpen(false)
      closeAllModals()
    }
  }

  return (
    <ModalContext.Provider value={modalProvider}>
      {isDialogOpen && (
        <Backdrop>
          <FlexColumn
            align="center center"
            style={{ height: '100%' }}
            onMouseDown={backdropClick}
          >
            <UrqlProvider>
              {dialogStates.login.open && (
                <Login message={dialogStates.login.message} />
              )}
              {dialogStates.register.open && <Registration pageProps={{}} />}
            </UrqlProvider>
          </FlexColumn>
        </Backdrop>
      )}
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
