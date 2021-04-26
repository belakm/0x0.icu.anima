import Link from 'next/link'
import styled from 'styled-components'

const StyledText = styled.h1`
  margin: 0 1em 0 0;
  font-weight: 400;
  font-size: 2em;
  color: #ff00bc;
  text-decoration: none;
`

interface ILogo {
  children: string
}

const Logo = ({ children }: ILogo) => {
  return (
    <Link href="/">
      <a href="/">
        <StyledText>{children}</StyledText>
      </a>
    </Link>
  )
}

export default Logo
