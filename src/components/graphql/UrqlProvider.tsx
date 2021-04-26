import { useContext } from 'react'
import { createClient, Provider } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import { API_GRAPHQL } from '../../../env/env'

interface IUrqlProvider {
  children: React.ReactNode
}

export const urqlSettings = {
  url: API_GRAPHQL,
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
