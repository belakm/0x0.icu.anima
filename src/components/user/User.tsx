import React, { useState } from 'react'
import Button from '../Win95/Button/Button'
const User = () => {
  const [isLoggedIn] = useState(false)
  return (
    <>
      {!isLoggedIn && <Button style={{ marginRight: 0 }}>CONNECT IN</Button>}
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
