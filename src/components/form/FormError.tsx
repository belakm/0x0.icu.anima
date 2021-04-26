import { ReactNode } from 'react'

interface IFormError {
  children: ReactNode
}

const FormError = ({ children }: IFormError) => {
  return <p style={{ color: 'red' }}>{children}</p>
}

export default FormError
