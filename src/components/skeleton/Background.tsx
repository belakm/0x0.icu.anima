import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../../../public/images/mask.png';

const BackgroundStyle = styled.div`
  background-image: url(${BackgroundImage});
  z-index: ${props => props.theme.levels.background};
  background-size: cover;
  background-position: center center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Background = () => (
  <BackgroundStyle />
)

export default Background
