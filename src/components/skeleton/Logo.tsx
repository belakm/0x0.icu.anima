import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;
`

const StyledLogoBlink = styled(StyledLogo)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`

const LogoContainer = styled.div`
  position: relative;
  height: 0;
  width: 15rem;
`

const Logo = () => {
  const [isBlinking, setIsBlinking] = useState<boolean>(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const timer = setInterval(() => {
      setIsBlinking(true)
      timeout = setTimeout(() => {
        setIsBlinking(false)
      }, 1000)
    }, 5800)
    return () => {
      clearTimeout(timeout)
      clearInterval(timer)
    }
  })

  return (
    <Link href="/">
      <a href="/">
        <LogoContainer>
          <StyledLogo src="/images/brand/logo2.png" />
          {isBlinking && (
            <StyledLogoBlink src="/images/brand/logo2_blink.png" />
          )}
        </LogoContainer>
      </a>
    </Link>
  )
}

export default Logo
