import Link from 'next/link'
import { forwardRef, LegacyRef } from 'react'

import Button, { IButton } from './Button'

interface ILinkButton extends IButton {
  href: string
  style?: React.CSSProperties
}

const RefLinkButton = forwardRef(
  (
    { href, children, style, variant, size }: ILinkButton,
    ref: LegacyRef<HTMLAnchorElement>,
  ) => (
    <a href={href} ref={ref}>
      <Button style={style} variant={variant} size={size}>
        {children}
      </Button>
    </a>
  ),
)

const LinkButton = ({ children, href, style, variant, size }: ILinkButton) => (
  <Link href={href} passHref>
    <RefLinkButton style={style} href={href} variant={variant} size={size}>
      {children}
    </RefLinkButton>
  </Link>
)

export default LinkButton
