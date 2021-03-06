import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext'
import ModalContext from '../../contexts/ModalContext'
import Button from '../Win95/Button/Button'

const User = () => {
  const modalContext = useContext(ModalContext)
  const authContext = useContext(AuthContext)
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  useEffect(() => {
    setLoggedIn(authContext.isLoggedIn)
  }, [authContext.isLoggedIn])
  return (
    <>
      {!isLoggedIn && 
        <Button 
          style={{ marginRight: 0 }} 
          onClick={() => modalContext.openLoginModal()}
        >
          CONNECT IN
        </Button>
      }
      {isLoggedIn && (
        <>
          <Button style={{ marginRight: 0 }}>Mičo</Button>
          <Button style={{ minWidth: 0 }}>▼</Button>
        </>
      )}
    </>
  )
}

export default User
