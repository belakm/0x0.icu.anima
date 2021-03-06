import React, { FormEvent, useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'
import { FlexColumn } from '../common/Flex'
import Modal from '../common/Modal'
import Button from '../Win95/Button/Button'

const Registration = () => {
  const modalContext = useContext(ModalContext)

  const inputStyle = {
    marginBottom: '1em'
  }

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("REGISTER")
  }

  return <Modal width="480" title="CONNECT IN">
      <p style={{ textAlign: 'center', color: 'grey' }}>EXCITING!</p>
      <form name="login-form" onSubmit={register} style={{ padding: '0 1em 1em 1em' }}>
        <FlexColumn>
          <label htmlFor="email">E-mail:</label>
          <input style={inputStyle} name="email" type="text"/>
          <label htmlFor="email">Name:</label>
          <input style={inputStyle} name="email" type="text"/>
          <label htmlFor="password">Password:</label>
          <input style={inputStyle} name="password" type="password"/>
          <label htmlFor="password">Repeat password:</label>
          <input style={inputStyle} name="password" type="password"/>
          <Button type="submit">
            REGISTER
          </Button>
        </FlexColumn>
      </form>
    </Modal>
}

export default Registration