import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Win95/Button/Button'
import { FlexRow } from '../common/Flex'
import Wrapper from '../gallery/Wrapper'

const links = [
  {
    name: 'my CREATIONS',
    href: '/',
  },
  {
    name: 'MERCH and LOVE me',
    href: '/about',
  },
]

const TopBarStyled = styled.nav`
  background: ${({ theme }) => theme.win95.material};
  border-bottom: 2px dashed ${({ theme }) => theme.win95.materialText};
  padding: 0.5em 0;
`
const TopBarButtonStyled = styled(Button)`
  box-shadow: none;
  font-size: 0.9em;
  padding: 0.5em 1em;
`

const TopBar = () => (
  <TopBarStyled>
    <Wrapper>
      <FlexRow>
        {links.map(({ name, href }) => (
          <Link href={href}>
            <TopBarButtonStyled>{name}</TopBarButtonStyled>
          </Link>
        ))}
      </FlexRow>
    </Wrapper>
  </TopBarStyled>
)

export default TopBar
