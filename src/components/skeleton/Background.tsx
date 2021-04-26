import styled from 'styled-components'

// e594c3

const BackgroundStyle = styled.div`
  background-color: ${({ theme }) => theme.background.background};

  background-image: linear-gradient(
      ${({ theme }) => theme.background.lineThick} 2px,
      transparent 2px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.background.lineThick} 2px,
      transparent 2px
    ),
    linear-gradient(
      ${({ theme }) => theme.background.lineThin} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.background.lineThin} 1px,
      transparent 1px
    );
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.levels.background};
`

const Background = () => <BackgroundStyle />

export default Background
