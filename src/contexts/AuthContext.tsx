import { createContext, useState, useEffect } from 'react';

interface IAuthContext {
  getToken: Function,
  setToken: Function,
  isLoggedIn: boolean
}

export const AuthContext = createContext<IAuthContext>({
  getToken: () => {},
  setToken: () => {},
  isLoggedIn: false
})

export const AuthProvider = ({ children } : { children: JSX.Element}) => {
  const [token, setToken] = useState<string | null>(null)
  const authProvider = {
    getToken: () => token == null ? null : "" + token,
    setToken: (token: null | string) => setToken(token),
    isLoggedIn: false
  }

  return <AuthContext.Provider value={authProvider}>
    {children}
  </AuthContext.Provider>
}

export default AuthContext