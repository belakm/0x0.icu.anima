import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext'
import ModalContext from '../../contexts/ModalContext'
import Dropdown from '../common/Dropdown'
import Button from '../Win95/Button/Button'

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
              text: 'Log out',
              fn: authContext.logout,
            },
            {
              text: 'CV Manager',
              link: 'manager/cv',
            },
          ]}
        />
      )}
    </>
  )
}

export default User
