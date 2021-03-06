import React, { createContext, useEffect, useState } from 'react';
import { FlexColumn } from '../components/common/Flex';
import Modal from '../components/common/Modal';
import Button from '../components/Win95/Button/Button';

interface ILoginContext {
  openModal: Function,
  closeModal: Function
}

export const LoginContext = createContext<ILoginContext>({
  openModal: () => {},
  closeModal: () => {}
})

export const LoginProvider = ({ children } : { children: React.ReactElement}) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const loginProvider = {
    openModal: () => setDialogOpen(true),
    closeModal: () => setDialogOpen(false)
  }

  const inputStyle = {
    marginBottom: '1em'
  }

  return <LoginContext.Provider value={loginProvider}>
    {dialogOpen && <Modal width="480" title="CONNECT IN">
      <form name="login-form" style={{ padding: '1em' }}>
        <FlexColumn>
          <label htmlFor="email">E-mail:</label>
          <input style={inputStyle} name="email" type="text"/>
          <label htmlFor="password">Password:</label>
          <input style={inputStyle} name="password" type="password"/>
          <Button type="submit">
            I'M READY
          </Button>
          <p>OR</p>
          <Button type="submit">
            CREATE NEW ACCOUNT
          </Button>
        </FlexColumn>
      </form>
    </Modal>}
    {children}
  </LoginContext.Provider>
}

export default LoginContext