import React from 'react'
import icons from '@react95/icons'
import Link from 'next/link'
import { List } from '@react95/core'
// eslint-disable-next-line import/no-cycle
import Menu from './Menu'

export interface IMenuItem {
  text: string,
  href: string,
  fn?: Function,
  icon: keyof typeof icons,
  subItems?: [IMenuItem],
  id: string | number
}

const MenuItem = ({ text, href = '/', icon, fn, subItems }: IMenuItem) => {
  return (
    <Link href={href}>
      <List.Item icon={icon} onClick={fn}>
        {text}
        <Menu items={subItems || []}/>
      </List.Item>
    </Link>
  )
}

MenuItem.defaultProps = {
  fn: () => {}
}

export default MenuItem