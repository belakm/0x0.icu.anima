import { ReactElement, useState } from 'react'
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

export interface ITitleBarOption {
  fn?: Function
  text?: string
  el?: ReactElement
}

export interface TitleBarProps {
  isActive?: boolean
  /*icon?: IconProps['name']*/
  className?: string
  title?: string
  options?: ITitleBarOption[]
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
      ? theme.system.headerBackground
      : theme.system.headerNotActiveBackground};
  color: ${({ isActive, theme }) =>
    isActive ? theme.system.headerText : theme.system.headerNotActiveText};
`

const Title = styled.h1`
  flex-grow: 1;
  font-weight: normal;
  line-height: 1.4em;
  margin: 0;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1px;
`

const WindowTitleBar: React.FunctionComponent<TitleBarProps> = ({
  children,
  className,
  title,
  isActive,
  options,
}) => {
  return (
    <TitleBarBackground isActive={isActive} className={className}>
      <Title>{title}</Title>
      {options?.map(({ fn, text, el }, index) => (
        <Option key={index} onClick={() => (fn ? fn() : null)}>
          {el ? el : null}
          {text ? text : null}
        </Option>
      ))}
      {children}
    </TitleBarBackground>
  )
}

WindowTitleBar.defaultProps = {
  title: 'UNKNOWN.EXE',
  isActive: true,
}

export default WindowTitleBar
