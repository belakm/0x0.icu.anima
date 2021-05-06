import Link from 'next/link'
import { forwardRef, LegacyRef } from 'react'

import Button, { IButtonVariant } from './Button'

interface ILinkButton {
  children: React.ReactNode
  href: string
  style?: React.CSSProperties
  variant?: IButtonVariant
}

const RefLinkButton = forwardRef(
  (
    { href, children, style, variant }: ILinkButton,
    ref: LegacyRef<HTMLAnchorElement>,
  ) => (
    <a href={href} ref={ref}>
      <Button style={style} variant={variant}>
        {children}
      </Button>
    </a>
  ),
)

const LinkButton = ({ children, href, style, variant }: ILinkButton) => (
  <Link href={href} passHref>
    <RefLinkButton style={style} href={href} variant={variant}>
      {children}
    </RefLinkButton>
  </Link>
)

export default LinkButton
