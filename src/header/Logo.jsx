import React, { Component } from 'react'
import styled from 'styled-components'

const LogoImage = styled.h1`
  font-size: 6em;
`

class Logo extends Component {
  render() {
    return <LogoImage>Sitri</LogoImage>
  }
}

export default Logo;
