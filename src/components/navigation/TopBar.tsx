import React from 'react'
import styled from 'styled-components';
import LinkedIconText from '../common/LinkedIconText';
import Menu from '../common/Menu/Menu';
import { IMenuItem } from '../common/Menu/MenuItem';

// theme is now fully typed
export const MainColor = styled.div`
  background: grey;
`;

const LogoTitle = styled.h1`
  font-family: "LinearBeam05";
  font-weight: 400;
  font-size: 10em;
  margin: 0;
  color:#c82855;
  display: inline-block;
`
const LogoSubTitle = styled.span`
  font-weight: 800;
  font-size: 4em;
  margin-left: .2em;
  color: ${props => props.theme.window.color.headerNotActiveBackground};
  display: inline-block;
`

const NavBar = styled.nav`
  padding: 1em 3.2em 1.6em;
  background-color: ${ props => props.theme.appColors.light.normal };
  position: sticky;
  top: 0;
  box-shadow: ${ props => props.theme.shadows.out };
`

const currentYear = (new Date()).getFullYear()

const pages : [IMenuItem] = [{
  icon: 'folder_exe',
  text: 'Mail',
  href: '',
  id: 0
}] 

const TopBar = () => (
  <NavBar>
    <div>
      <LogoTitle>SITRI</LogoTitle>
      <LogoSubTitle>{ currentYear }</LogoSubTitle>
    </div>
    <nav>
      <LinkedIconText
        text="sitri@0x0.icu"
        href="mailto:string@0x0.icu"
        icon="mapi32_801"
      />
      <LinkedIconText
        text="Facebook"
        href="#"
        icon="scrolling_marquee_100"
      />
      <LinkedIconText
        text="Instagram"
        href="#"
        icon="wangimg_130"
      />
      <LinkedIconText
        text="DeviantArt"
        href="#"
        icon="progman_11"
      />
    </nav>
    <Menu items={pages} />
  </NavBar>
)

export default TopBar
