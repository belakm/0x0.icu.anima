import styled from 'styled-components';

interface ScrollableContainerProps {
  lines: number
}

const ScrollableContainer = styled.div<ScrollableContainerProps>`
  max-height: ${({lines}) => `${lines}ex`};
  overflow: auto;
  margin: 1em 0;
  background: ${props => props.theme.colors.brand.light};
  p, h1, h2, h3, h3, h4, h5, h6, li, a {
    color: ${props => props.theme.colors.light.lightest};
  }
  padding: 1em;
  box-sizing: border-box;
`;

export default ScrollableContainer
