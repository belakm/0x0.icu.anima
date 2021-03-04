import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Button from '../Win95/Button/Button'

interface IUser {
  openLoginModal: Function
}
const User = ({ openLoginModal } : IUser) => {
  const authContext = useContext(AuthContext)
  return (
    <>
      {!authContext.isLoggedIn && 
        <Button 
          style={{ marginRight: 0 }} 
          onClick={openLoginModal()}
        >
          CONNECT IN
        </Button>
      }
      {authContext.isLoggedIn && (
        <>
          <Button style={{ marginRight: 0 }}>Mičo</Button>
          <Button style={{ minWidth: 0 }}>▼</Button>
        </>
      )}
    </>
  )
}

export default User
