import styled from 'styled-components'
import breakpoints from './responsive/breakpoints'

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
  margin: 0 auto;

  @media all and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    padding: 0 2em;
  }

  @media all and (min-width: ${breakpoints.desktop}px) {
    max-width: calc(1440px + 2em);
  }
`

export default Wrapper
