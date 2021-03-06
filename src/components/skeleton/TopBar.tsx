import React from 'react'
import styled from 'styled-components'
import { FlexRow } from '../common/Flex'
import Wrapper from '../gallery/Wrapper'
import User from '../user/User'
import LinkButton from '../Win95/Button/LinkButton'

const links = [
  {
    name: 'my CREATIONS',
    href: '/',
  },
  {
    name: 'good SHIT',
    href: '/store',
  },
]

const TopBarStyled = styled.nav`
  z-index: ${({ theme }) => theme.levels.static};
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.win95.material};
  border-bottom: 2px dashed ${({ theme }) => theme.win95.materialText};
  width: 100%;
  padding: 0.5em 0;
`

const TopBar = () => {
  return <TopBarStyled>
  <Wrapper>
    <FlexRow>
      <FlexRow grow={1}>
        {links.map(({ name, href }, index) => (
          <LinkButton key={index} href={href}>{name}</LinkButton>
        ))}
      </FlexRow>
      <User />
    </FlexRow>
  </Wrapper>
</TopBarStyled>
}
  


export default TopBar
