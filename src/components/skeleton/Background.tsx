import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../../../public/images/mask.png'


// e594c3

const BackgroundStyle = styled.div`
background-color: #5aa;
  background-image:
    linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.theme.levels.background};
  position: fixed;
`;

const Background = () => (
  <BackgroundStyle />
)

export default Background
