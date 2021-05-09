import styled from 'styled-components'

interface IBorderBox {
  type?: 'primary' | 'secondary' | 'default'
  borderType?: 'double' | 'default'
}

const BorderBox = styled.section<IBorderBox>`
  padding: 1em;
  box-sizing: border-box;
  background: ${({ theme }) => theme.system.borderBoxBackground};
  border-width: 2px;
  border-style: ${({ borderType }) =>
    borderType == 'double' ? 'double' : 'dashed'};
  border-color: ${({ theme, type }) =>
    type == 'primary'
      ? theme.system.borderBoxBorderPrimary
      : type == 'secondary'
      ? theme.system.borderBoxBorderSecondary
      : theme.system.borderBoxBorderDefault};
  color: ${({ theme }) => theme.system.materialText};
`

export default BorderBox
