import React from 'react'
import { createClient, Provider } from 'urql'

const urqlConfig = createClient({
  url: 'http://174.138.11.146:5433/graphql',
})

interface IUrqlProvider {
  children: React.ReactNode
}

const UrqlProvider = ({ children }: IUrqlProvider) => {
  return <Provider value={urqlConfig}>{children}</Provider>
}

export default UrqlProvider
