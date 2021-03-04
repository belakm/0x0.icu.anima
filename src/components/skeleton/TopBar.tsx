import React, { useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Win95/Button/Button'
import { FlexRow } from '../common/Flex'
import Wrapper from '../gallery/Wrapper'
import User from '../user/User'
import ModalContext from '../../contexts/ModalContext'

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
  const modalContext = useContext(ModalContext)
  return <TopBarStyled>
  <Wrapper>
    <FlexRow>
      <FlexRow grow={1}>
        {links.map(({ name, href }, index) => (
          <Link key={index} href={href} passHref>
            <Button>{name}</Button>
          </Link>
        ))}
      </FlexRow>
      <User openLoginModal={() => modalContext.openLoginModal()}/>
    </FlexRow>
  </Wrapper>
</TopBarStyled>
}
  


export default TopBar
