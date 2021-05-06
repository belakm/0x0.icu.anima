import styled from 'styled-components'
import { border } from '../Border'

export interface ButtonProps {
  children: React.ReactChildren | React.ReactNode | string | number
  variant?: string
  fontSize?: string
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.system.material};
  color: ${({ theme }) => theme.system.materialText};
  padding: 6px 22px 6px;
  min-width: 70px;
  font-size: 16px;
  font-family: 'Share Tech Mono', monospace;
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
