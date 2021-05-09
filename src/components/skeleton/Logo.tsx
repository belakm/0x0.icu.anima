import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
  width: auto;
  height: 100%;
  z-index: 1;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

const StyledLogoBlink = styled(StyledLogo)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`

const LogoContainer = styled.div`
  position: relative;
  height: 40px;
  margin-right: 2.2em;
`

const Logo = () => {
  const [isBlinking, setIsBlinking] = useState<boolean>(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 200)
    }, 5800)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Link href="/">
      <a href="/">
        <LogoContainer>
          <StyledLogo
            style={{ opacity: isBlinking ? 0 : 1 }}
            src="/images/brand/0x0_cat.png"
          />
          {isBlinking && (
            <StyledLogoBlink src="/images/brand/0x0_cat_blink.png" />
          )}
        </LogoContainer>
      </a>
    </Link>
  )
}

export default Logo
