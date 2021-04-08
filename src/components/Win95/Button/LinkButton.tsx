import Link from 'next/link'
import { forwardRef } from 'react'

import Button from './Button'

interface ILinkButton {
  children: React.ReactNode
  href: string
}

const LinkButton = forwardRef(
  ({ children, href }: ILinkButton, ref: React.Ref<HTMLAnchorElement>) => {
    return (
      <Link href={href} passHref>
        <a href={href} ref={ref}>
          <Button>{children}</Button>
        </a>
      </Link>
    )
  },
)

export default LinkButton
