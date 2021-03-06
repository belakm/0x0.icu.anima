import { ReactElement } from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: 30% 30% 30%;
`

const StyledGridElement = styled.div`
  align-self: stretch;
`

interface IGrid {
  elements?: ReactElement[]
}

const Grid = ({ elements }: IGrid) => {
  return (
    <StyledGrid>
      {elements &&
        elements.map((e, index) => (
          <StyledGridElement key={index}>{e}</StyledGridElement>
        ))}
    </StyledGrid>
  )
}

export default Grid
