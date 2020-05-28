import React, { Component } from 'react'
import Logo from './Logo'
import styled from 'styled-components';

const HeaderSection = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 24px 0;
  width: 960px;
  text-align: center;
  color: white;
  background: hsla(244, 50%, 50%, 5%);
`

class Header extends Component {
  render() {
    return <HeaderSection>
      <p>0x0.icu presents</p>
      <Logo></Logo>
    </HeaderSection>
  }
}

export default Header;