import React, { createContext, useState, useEffect, useContext } from 'react'
import { gql, useQuery } from 'urql'
import UrqlProvider from '../components/graphql/UrqlProvider'

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
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  setToken: () => {},
  user: null,
  setUser: () => {},
  isLoggedIn: false,
})

const FetcherComponent = () => {
  const authContext = useContext(AuthContext)
  const [userData, fetchUser] = useQuery({ query: FetchUser })

  // set or fetch user
  useEffect(() => {
    console.log('USER DATA', userData)
    const { data } = userData
    if (data == null && authContext.token != null) {
      fetchUser()
    } else if (data != null) {
      const { currentPerson } = data
      authContext.setUser(currentPerson)
    }
  }, [userData])

  return <></>
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string | null>(null)
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)
  const authProvider = {
    isLoggedIn,
    token,
    setToken,
    user,
    setUser,
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

  return (
    <AuthContext.Provider value={authProvider}>
      <UrqlProvider>
        <FetcherComponent />
      </UrqlProvider>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
