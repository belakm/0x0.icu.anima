import { createContext, useState, useEffect } from 'react';

interface ILoginContext {
  openModal: Function,
  closeModal: Function
}

export const LoginContext = createContext<ILoginContext>({
  openModal: () => {},
  closeModal: () => {}
})

export const LoginProvider = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const loginProvider = {
    openModal: () => setDialogOpen(true),
    closeModal: () => setDialogOpen(false)
  }

  return <LoginContext.Provider value={loginProvider}>
    {dialogOpen && <div>
      Login
    </div>}
  </LoginContext.Provider>
}

export default LoginContext