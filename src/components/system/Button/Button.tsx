import styled from 'styled-components'
import { border } from '../Border'

export type IButtonVariant = 'default' | 'primary' | 'raised'

export interface IButton {
  children: React.ReactChildren | React.ReactNode | string | number
  variant?: IButtonVariant
  fontSize?: string
  size?: 'default' | 'large'
}

export const StyledButton = styled.button<IButton>`
  background-color: ${({ theme, variant }) =>
    variant == 'primary'
      ? theme.system.primaryMaterial
      : variant == 'raised'
      ? theme.system.materialText
      : theme.system.material};
  color: ${({ theme, variant }) =>
    variant == 'primary'
      ? theme.system.primaryMaterialText
      : variant == 'raised'
      ? theme.system.material
      : theme.system.materialText};
  padding: ${({ size }) => (size == 'large' ? '.2em .5em' : '.5em 1em')};
  min-width: 70px;
  font-size: ${({ size }) => (size == 'large' ? '2em' : '1em')};
  font-weight: ${({ variant }) => (variant == 'primary' ? 'bold' : 'normal')};
  font-family: ${({ theme }) => theme.font};
  ${border()}
  :disabled {
    color: ${({ theme }) => theme.system.canvasTextDisabled};
    text-shadow: 1px 1px white;
  }
  :focus {
    outline: 1px dotted ${({ theme }) => theme.system.borderDarkest};
    outline-offset: -5px;
  }
  :not(:disabled):active {
    outline: 1px dotted ${({ theme }) => theme.system.borderDarkest};
    outline-offset: -5px;
    ${border({ direction: 'intrude' })};
  }
`

const Button = ({
  children,
  variant = 'default',
  ...rest
}: IButton & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  children: 'EMPTY',
}

export default Button
