import { List } from '@react95/core'
import React from 'react'
// eslint-disable-next-line import/no-cycle
import MenuItem, { IMenuItem } from './MenuItem';

type MenuProps = {
  items: [IMenuItem] |[]
}

const Menu = ({ items = [] } : MenuProps) => {
  return Array.isArray(items) && items.length <= 0 ? (<></>) : (
    <nav>
      <List>
      { (items as Array<IMenuItem>).map(({ text, href, icon, subItems, id } : IMenuItem) => (
          <MenuItem id={id} key={id} text={text} icon={icon} href={href} subItems={subItems} />
        )
      )}
      </List>
    </nav>
  )
}

export default Menu