import styled, { css } from 'styled-components'
import { FlexRow } from '../common/Flex'

const blackHaloBackground = css`
  background: rgb(2, 0, 36);
  background: -moz-radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.7315301120448179) 0%,
    rgba(0, 0, 0, 0.23573179271708689) 74%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.7315301120448179) 0%,
    rgba(0, 0, 0, 0.23573179271708689) 74%,
    rgba(0, 0, 0, 0) 100%
  );
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.7315301120448179) 0%,
    rgba(0, 0, 0, 0.23573179271708689) 74%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#000000",GradientType=1);
`

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

  ${blackHaloBackground}

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

interface IBrandTop {
  title: string
  description: string
}
const BrandTop = ({ title, description }: IBrandTop) => {
  return (
    <section>
      <FlexRow align="start end">
        <LogoTitle>0x0</LogoTitle>
        <LogoSubTitle>
          {title} - <small>{description}</small>
        </LogoSubTitle>
      </FlexRow>
    </section>
  )
}

export default BrandTop
