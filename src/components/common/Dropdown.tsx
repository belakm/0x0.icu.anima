import { useState } from 'react'
import styled from 'styled-components'
import Button from '../system/Button/Button'
import LinkButton from '../system/Button/LinkButton'

interface IDropdownItem {
  text: String
  fn?: Function
  link?: string
}

interface IDropdown {
  text: String
  items: IDropdownItem[]
}

const DropdownNav = styled.nav`
  position: relative;
`

const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  margin: 0;
  padding: 0;
`

const DropdownItem = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
`

const Dropdown = ({ items, text }: IDropdown) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  return (
    <DropdownNav>
      <Button style={{ marginRight: 0 }}>{text}</Button>
      <Button
        style={{ minWidth: 0 }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {dropdownOpen ? '▲' : '▼'}
      </Button>
      {dropdownOpen && (
        <DropdownList>
          {items.map(({ text, fn, link }, index) => (
            <DropdownItem key={index}>
              {link ? (
                <LinkButton style={{ width: '100%' }} href={link}>
                  {text}
                </LinkButton>
              ) : (
                <Button
                  style={{ width: '100%' }}
                  onClick={() => (fn ? fn() : null)}
                >
                  {text}
                </Button>
              )}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownNav>
  )
}

export default Dropdown
