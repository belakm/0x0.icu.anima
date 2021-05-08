import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext'
import ModalContext from '../../contexts/ModalContext'
import Dropdown from '../system/Dropdown/Dropdown'
import Button from '../system/Button/Button'

const User = () => {
  const modalContext = useContext(ModalContext)
  const authContext = useContext(AuthContext)

  return (
    <>
      {!authContext.isLoggedIn && (
        <Button
          style={{ marginRight: 0 }}
          onClick={() => modalContext.openLoginModal({})}
        >
          CONNECT IN
        </Button>
      )}
      {authContext.isLoggedIn && (
        <Dropdown
          text={authContext.user?.fullName || 'Anonymous'}
          items={[
            {
              text: 'CV Manager',
              link: '/manager/portfolio',
            },
            {
              text: 'Log out',
              fn: authContext.logout,
            },
          ]}
        />
      )}
    </>
  )
}

export default User
