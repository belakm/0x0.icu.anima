import { ReactElement } from 'react'
import { FlexColumn, FlexRow } from './Flex'

interface IColumnGrid {
  elements?: ReactElement[]
}

const ColumnGrid = ({ elements }: IColumnGrid) => {
  const margins = [
    { marginRight: '1em' },
    { marginRight: '.5em', marginLeft: '.5em' },
    { marginLeft: '1em' },
  ]
  return (
    <FlexRow>
      {[1, 2, 3].map(columnNumber => (
        <FlexColumn
          key={columnNumber}
          style={{ ...margins[columnNumber - 1], flex: '33%' }}
        >
          {elements &&
            elements.map((e, index) =>
              (index + 3 - columnNumber) % 3 == 0 ? (
                <div style={{ marginBottom: '2em' }} key={index}>
                  {e}
                </div>
              ) : null,
            )}
        </FlexColumn>
      ))}
    </FlexRow>
  )
}

export default ColumnGrid
