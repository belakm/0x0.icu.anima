import { createContext, useState, useEffect } from 'react'
import { gql, useQuery } from 'urql'

const FetchUser = gql`
  query FetchUser {
    currentPerson {
      about
      createdAt
      firstName
      fullName
      id
      lastName
    }
  }
`

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  about: string
  createdAt: string
  fullName: string
}

interface IAuthContext {
  token: string | null
  user: IUser | null
  isLoggedIn: boolean
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  user: null,
  isLoggedIn: false,
})

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string | null>(null)
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [userData, fetchUser] = useQuery({ query: FetchUser })
  const [user, setUser] = useState<IUser | null>(null)
  const authProvider = {
    token,
    isLoggedIn,
    user,
  }

  // fetch token
  useEffect(() => {
    if (token != null) {
      setLoggedIn(true)
      localStorage.setItem('token', token)
    } else {
      const savedToken = localStorage.getItem('token')
      if (savedToken != null) {
        setToken(savedToken)
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    }
  }, [token])

  // set or fetch user
  useEffect(() => {
    if (userData == null && token != null) {
      fetchUser()
    } else if (userData != null) {
      const {
        data: { currentPerson },
      } = userData
      setUser(currentPerson)
    }
  }, [userData])

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
