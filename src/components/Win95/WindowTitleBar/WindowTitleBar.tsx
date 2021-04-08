import { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from '../Button/Button'

export const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  display: flex;
`

export const OptionItem = styled.li`
  display: flex;
  margin-left: 2;
  &:first-child {
    margin-right: 0;
  }
`

export const Option = styled(StyledButton)`
  padding: 0;
  width: 17px;
  height: 16px;
  min-width: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  padding-right: 1px;
`

Option.displayName = 'Option'

interface TitleBarProps {
  isActive?: boolean
  /*icon?: IconProps['name']*/
  className?: string
  title?: string
}

const TitleBarBackground = styled.div<{ isActive?: boolean }>`
  height: 20px;
  padding: 1px 2px;
  margin: 0 0 1px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  background: ${({ isActive, theme }) =>
    isActive
      ? theme.win95.headerBackground
      : theme.win95.headerNotActiveBackground};
  color: ${({ isActive, theme }) =>
    isActive ? theme.win95.headerText : theme.win95.headerNotActiveText};
`

const Title = styled.h1`
  flex-grow: 1;
  font-weight: normal;
  line-height: 1.4em;
  margin: 0;
  font-size: 0.6em;
  letter-spacing: 1px;
`

const WindowTitleBar: React.FunctionComponent<TitleBarProps> = ({
  children,
  className,
  title,
  isActive,
}) => {
  const [isOptionToggled, setOptionToggled] = useState(false)

  return (
    <TitleBarBackground isActive={isActive} className={className}>
      <Title>{title}</Title>
      <Option onClick={() => setOptionToggled(true)}>
        {isOptionToggled ? '♥' : '♡'}
      </Option>
      {children}
    </TitleBarBackground>
  )
}

WindowTitleBar.defaultProps = {
  title: 'UNKNOWN.EXE',
  isActive: true,
}

export default WindowTitleBar
