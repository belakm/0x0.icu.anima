import React from 'react'
import styled from 'styled-components'
import { FlexRow } from '../common/Flex'

const LogoTitle = styled.h1`
  font-family: 'LinearBeam';
  font-weight: 400;
  font-size: 10em;
  margin: 0;
  color: black;
  display: inline-block;
  text-shadow: 2px 7px black;

  animation-name: spin, depth;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-direction: alternate;
  transform: rotate3d(-1, 1, 0, 3deg);

  @keyframes spin {
    0% {
      transform: rotate3d(-1, 1, 0, 3deg);
    }
    25% {
      transform: rotate3d(1, 1, 0, 8deg);
    }
    50% {
      transform: rotate3d(1, -1, 0, 8deg);
    }
    75% {
      transform: rotate3d(-1, -1, 0, 8deg);
    }
    100% {
      transform: rotate3d(-1, 1, 0, 3deg);
    }
  }
  @keyframes depth {
    0% {
      text-shadow: 1px 1px #ff00bc,
        -1px -1px ${({ theme }) => theme.background.lineThick};
    }
    33% {
      text-shadow: 1px 1px #ff00bc, 2px 1px #ff00bc, 3px 1px #ff00bc,
        4px 1px #ff00bc, 5px 1px #ff00bc,
        -1px 1px ${({ theme }) => theme.background.lineThick},
        -2px 1px ${({ theme }) => theme.background.lineThick},
        -3px 1px ${({ theme }) => theme.background.lineThick},
        -4px 1px ${({ theme }) => theme.background.lineThick},
        -5px 1px ${({ theme }) => theme.background.lineThick};
    }
    66% {
      text-shadow: 1px -1px ${({ theme }) => theme.background.lineThick},
        2px -1px ${({ theme }) => theme.background.lineThick},
        3px -1px ${({ theme }) => theme.background.lineThick},
        4px -1px ${({ theme }) => theme.background.lineThick},
        5px -1px ${({ theme }) => theme.background.lineThick}, -1px -1px #ff00bc,
        -2px -1px #ff00bc, -3px -1px #ff00bc, -4px -1px #ff00bc,
        -5px -1px #ff00bc;
    }
    100% {
      text-shadow: 1px 1px #ff00bc,
        -1px -1px ${({ theme }) => theme.background.lineThick};
    }
  }
`

const LogoSubTitle = styled.span`
  font-weight: 800;
  font-size: 2em;
  margin-left: 0.66em;
  margin-bottom: 0.66em;
  color: ${({ theme }) => theme.background.lineThick};
  display: inline-block;
  font-family: 'LinearBeam';
  background: ${({ theme }) => theme.background.background};
`

const BrandTop = () => {
  return (
    <section>
      <FlexRow align="start end">
        <LogoTitle>SITRI</LogoTitle>
        <LogoSubTitle>{new Date().getFullYear()}</LogoSubTitle>
      </FlexRow>
    </section>
  )
}

export default BrandTop
