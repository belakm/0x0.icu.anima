import React, { FormEvent, useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'
import { FlexColumn } from '../common/Flex'
import Modal from '../common/Modal'
import Button from '../Win95/Button/Button'

const Login = () => {
  const modalContext = useContext(ModalContext)

  const inputStyle = {
    marginBottom: '1em'
  }

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("LOGIN")
  }

  const openRegistrationModal = () => {
    console.log("OPEN REGISTRATION MODAL")
    modalContext.openRegistrationModal()
  }
  return <Modal width="480" title="CONNECT IN">
      <p style={{ textAlign: 'center', color: 'grey' }}>Are you new?</p>
      <div style={{ padding: '0 1em' }}>
        <FlexColumn>
          <Button onClick={openRegistrationModal}>
            CREATE NEW ACCOUNT
          </Button>
        </FlexColumn>
      </div>
      <hr style={{ width: '90%', marginTop: '2em', borderColor: 'grey' }} />
      <p style={{ textAlign: 'center', color: 'grey' }}>Been here before?</p>
      <form name="login-form" onSubmit={login} style={{ padding: '0 1em 1em 1em' }}>
        <FlexColumn>
          <label htmlFor="email">E-mail:</label>
          <input style={inputStyle} name="email" type="text"/>
          <label htmlFor="password">Password:</label>
          <input style={inputStyle} name="password" type="password"/>
          <Button type="submit">
            SIGN IN
          </Button>
        </FlexColumn>
      </form>
    </Modal>
}

export default Login