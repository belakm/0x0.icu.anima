import Link from 'next/link'
import { forwardRef, LegacyRef } from 'react'

import Button from './Button'

interface ILinkButton {
  children: React.ReactNode
  href: string
  style?: React.CSSProperties
}

const RefLinkButton = forwardRef(
  (
    { href, children, style }: ILinkButton,
    ref: LegacyRef<HTMLAnchorElement>,
  ) => (
    <a href={href} ref={ref}>
      <Button style={style}>{children}</Button>
    </a>
  ),
)

const LinkButton = ({ children, href, style }: ILinkButton) => (
  <Link href={href} passHref>
    <RefLinkButton style={style} href={href}>
      {children}
    </RefLinkButton>
  </Link>
)

export default LinkButton
