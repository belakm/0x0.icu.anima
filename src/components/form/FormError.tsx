import React from 'react'

interface IFormError {
  children: React.ReactNode
}

const FormError = ({ children } : IFormError) => {
  return <p style={{ color: 'red' }}>
    {children}
  </p>
}

export default FormError