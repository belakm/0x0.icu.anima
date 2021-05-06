import styled from 'styled-components'
import { border } from '../Border'

export type IButtonVariant = 'default' | 'primary'

export interface ButtonProps {
  children: React.ReactChildren | React.ReactNode | string | number
  variant?: IButtonVariant
  fontSize?: string
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    variant == 'default' ? theme.system.material : theme.system.materialText};
  color: ${({ theme, variant }) =>
    variant == 'default' ? theme.system.materialText : theme.system.material};
  padding: 6px 22px 6px;
  min-width: 70px;
  font-size: 16px;
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
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
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
