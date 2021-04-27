import { createContext, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { FlexColumn } from '../components/common/Flex'
import UrqlProvider from '../components/graphql/UrqlProvider'
import Login, { ILogin } from '../components/user/Login'
import Dialog, { IDialog } from '../components/common/Dialog'
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
  closeAllModals: () => void
  openLoginModal: ({ message }: ILogin) => void
  openDialogModal: ({ message, handleMessage }: IDialog) => void
  openRegistrationModal: () => void
}

interface IDialogStates {
  login: {
    open: boolean
    message?: React.ReactNode
  }
  dialog: {
    open: boolean
    message: React.ReactNode
    handleMessage: (anwser: boolean) => void
  }
  register: {
    open: boolean
  }
}

export const ModalContext = createContext<IModalContext>({
  closeAllModals: () => {},
  openLoginModal: () => {},
  openRegistrationModal: () => {},
  openDialogModal: () => {},
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
    dialog: {
      open: false,
      message: 'Are you really sure??',
      handleMessage: () => {},
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
    handleMessage,
  }: {
    dialog: keyof IDialogStates
    message?: React.ReactNode
    handleMessage?: (anwser: boolean) => void
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
        ...(handleMessage != null && { handleMessage }),
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
    openDialogModal: ({ message, handleMessage }: IDialog) => {
      setDialogOpen(true)
      openDialog({ dialog: 'dialog', message, handleMessage })
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
              {dialogStates.dialog.open && (
                <Dialog
                  handleMessage={dialogStates.dialog.handleMessage}
                  message={dialogStates.dialog.message}
                />
              )}
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
