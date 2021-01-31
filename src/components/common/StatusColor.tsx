import styled, { IStatusColors } from 'styled-components'

interface IStatusColor {
  type: keyof IStatusColors
}
const StatusColor = styled.span<IStatusColor>`
  color: ${({ type, theme }) => theme.status[type]};
`

export default StatusColor
