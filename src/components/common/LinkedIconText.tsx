import { Icon } from '@react95/core'
import React from 'react'
import styled from 'styled-components'
import icons from '@react95/icons';

const Link = styled.a`
  padding: 0.5em 1em;
  cursor: pointer;
  & > * {
    cursor: pointer !important;
  }
  /* unvisited link */
  &:link {
    color: ${props => props.theme.appColors.brand.dark};
  }
  /* visited link */
  &:visited {
    color: ${props => props.theme.appColors.brand.darkest};
  }
  /* mouse over link */
  &:hover {
    color: ${props => props.theme.appColors.brand.normal};
  }
  /* selected link */
  &:active {
    color: ${props => props.theme.appColors.brand.light};
  }
`

const LinkText = styled.span`
  height: 2em;
  line-height: 2em; 
  padding-left: 1em; 
  font-size: 1.2em;
  display: inline-block;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: 800;
`

interface LinkedIconTextProps {
  icon: keyof typeof icons,
  href: string,
  text: string
}

const spanStyle = {display:'inline-block', verticalAlign: 'middle'}

const LinkedIconText = ({ icon, href, text} : LinkedIconTextProps) => (
  <Link href={href}>
    <Icon
      fallback={false}
      size={32}
      width={32}
      height={32}
      name={icon}
      style={spanStyle}
    />
    <LinkText style={{...spanStyle, }}>{text}</LinkText>
  </Link>
)

export default LinkedIconText
