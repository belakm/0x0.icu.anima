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

interface CmsGrid {
  elements?: ReactElement[]
}

const CmsGrid = ({ elements }: CmsGrid) => {
  return (
    <StyledGrid>
      {elements &&
        elements.map(e => <StyledGridElement>{e}</StyledGridElement>)}
    </StyledGrid>
  )
}

export default CmsGrid
