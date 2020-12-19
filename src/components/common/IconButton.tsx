import React from 'react'
import icons from '@react95/icons'
import { Button, Icon } from '@react95/core'

interface IIconButton {
  href?: string
  icon?: keyof typeof icons
  onClick?: Function
  children?: JSX.Element
  style?: React.CSSProperties
}

const IconButton: React.FunctionComponent<IIconButton> = ({
  href,
  icon,
  onClick,
  children,
  style,
}: IIconButton) => {
  const ButtonEl = (
    <Button
      onClick={onClick && onClick()}
      role="link"
      style={{
        width: '48px',
        height: '48px',
        minWidth: 0,
        padding: 8,
        boxSizing: 'border-box',
        margin: 2,
        ...style,
      }}
    >
      {icon && <Icon name={icon} />}
      {children}
    </Button>
  )
  return href ? (
    <a href={href} style={style}>
      {ButtonEl}
    </a>
  ) : (
    ButtonEl
  )
}

IconButton.defaultProps = {
  href: undefined,
  icon: undefined,
  onClick: undefined,
  children: undefined,
  style: undefined,
}

export default IconButton
