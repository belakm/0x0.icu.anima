import styled from 'styled-components'
import { FlexRow } from '../common/Flex'
import Wrapper from '../common/Wrapper'
import User from '../user/User'
import LinkButton from '../system/Button/LinkButton'
import Logo from './Logo'

const links = [
  {
    name: 'KERNEL_PANIC',
    href: '/kernel-panic',
  },
  {
    name: 'SITRI ARTWORKS',
    href: '/sitri',
  },
  {
    name: '0x0_SPECIMEN',
    href: '/specimen',
  },
  {
    name: 'ABOUT US',
    href: '/about',
  },
]

const TopBarStyled = styled.nav`
  z-index: ${({ theme }) => theme.levels.static};
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.system.material};
  border-bottom: 2px dashed ${({ theme }) => theme.system.materialText};
  width: 100%;
  padding: 0.5em 0;
  height: 60px;
  box-sizing: border-box;
`

const TopBarPadding = styled.div`
  width: 100%;
  height: 60px;
`

const TopBar = () => {
  return (
    <>
      <TopBarPadding />
      <TopBarStyled>
        <Wrapper>
          <FlexRow>
            <Logo />
            <FlexRow grow={1}>
              {links.map(({ name, href }, index) => (
                <LinkButton key={index} href={href}>
                  {name}
                </LinkButton>
              ))}
            </FlexRow>
            <User />
          </FlexRow>
        </Wrapper>
      </TopBarStyled>
    </>
  )
}

export default TopBar
