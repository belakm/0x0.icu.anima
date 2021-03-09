import React from 'react'

interface IFormError {
  errors: string[]
}

const FormError = ({ errors } : IFormError) => {
  return <section>
    {errors.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)}
  </section>
}

export default FormError