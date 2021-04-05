import { useContext } from 'react';
import * as React from 'react';
import { createClient, Provider } from 'urql'
import AuthContext from '../../contexts/AuthContext'

interface IUrqlProvider {
  children: React.ReactNode
}

export const urqlSettings = {
  url: 'http://localhost:5433/graphql',
}

const UrqlProvider = ({ children }: IUrqlProvider) => {
  const authContext = useContext(AuthContext)
  const token = authContext.token
  const urqlConfig = createClient({
    ...urqlSettings,
    fetchOptions: () => {
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
    },
  })
  return <Provider value={urqlConfig}>{children}</Provider>
}

export default UrqlProvider
