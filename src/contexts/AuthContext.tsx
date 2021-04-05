import { createContext, useState, useEffect, useContext } from 'react';
import { createClient, gql } from 'urql'
import { urqlSettings } from '../components/graphql/UrqlProvider'

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
  setToken: Function
  user: IUser | null
  setUser: Function
  isLoggedIn: boolean
  logout: Function
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  setToken: () => {},
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string | null>(null)
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)
  const authContext = useContext(AuthContext)
  const authProvider = {
    isLoggedIn,
    token,
    setToken,
    user,
    setUser,
    logout: () => {
      setUser(null)
      setToken(null)
      localStorage.removeItem('token')
    },
  }

  const urqlClient = createClient({
    ...urqlSettings,
    fetchOptions: () => {
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  // fetch token
  useEffect(() => {
    if (token != null) {
      localStorage.setItem('token', token)
      urqlClient
        .query(FetchUser)
        .toPromise()
        .then(result => {
          console.log('RESULT', result)
          const { data } = result
          if (data && data.currentPerson) {
            setUser(data.currentPerson)
            setLoggedIn(true)
          }
        })
    } else {
      const savedToken = localStorage.getItem('token')
      if (savedToken != null) {
        setToken(savedToken)
      } else {
        setToken(null)
        setLoggedIn(false)
      }
    }
  }, [token])

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
