import React, { FormEvent, useContext, useEffect, useState } from 'react'
import ModalContext from '../../contexts/ModalContext'
import { FlexColumn, FlexRow } from '../common/Flex'
import FormError from '../common/FormError'
import Modal from '../common/Modal'
import Button from '../Win95/Button/Button'

interface IRegistrationForm {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
}

const Registration = () => {
  const modalContext = useContext(ModalContext)
  const [errors, setErrors] = useState<string[]>([])
  const [formData, setFormData] = useState<IRegistrationForm>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
  })

  const inputStyle = {
    marginBottom: '1em'
  }

  useEffect(() => {
    validateForm()
  }, [formData])

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const entries = Object.entries(formData)
    const errors = entries.reduce((errors: string[], [name, value]) => {
      if (value == '') {
        errors = [...errors, `Field ${name} is required.`]
      }
      return errors
    }, [])
    if (formData.password != formData.passwordConfirmation) {
      errors.push('Passwords do not match.')
    }
    setErrors(errors)
  }

  const register = (e: FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault()
    const errors = validateForm()
    setErrors(errors)
  }

  return <Modal width="480" title="CONNECT IN">
      <p style={{ textAlign: 'center', color: 'grey' }}>EXCITING!</p>
      <form name="login-form" onSubmit={register} style={{ padding: '0 1em 1em 1em' }}>
        <FlexColumn>
          <label htmlFor="email">E-mail: *</label>
          <input style={inputStyle} name="email" type="text" onChange={inputHandler}/>
          <FlexRow>
            <FlexColumn>
              <label htmlFor="firstName">First name: *</label>
              <input style={inputStyle} name="firstName" type="text" onChange={inputHandler}/>
            </FlexColumn>
            <FlexColumn>
              <label htmlFor="lastName">Last name: *</label>
              <input style={inputStyle} name="lastName" type="text" onChange={inputHandler}/>
            </FlexColumn>
          </FlexRow>
          <label htmlFor="password">Password: *</label>
          <input style={inputStyle} name="password" type="password" onChange={inputHandler}/>
          <label htmlFor="passwordConfirmation">Repeat password: *</label>
          <input style={inputStyle} name="passwordConfirmation" type="password" onChange={inputHandler}/>
          <Button type="submit" disabled={errors.length > 0}>
            REGISTER
          </Button>
          <p>* All fields are required.</p>
        </FlexColumn>
        <FormError errors={errors} />
      </form>
    </Modal>
}

export default Registration