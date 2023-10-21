import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'
import Link, { LinkProps as _NextLinkProps } from 'next/link'

type LinkDefaultProps = {
  className?: string
  externalLink?: boolean
}

export type ExternalLinkProps = ComponentPropsWithRef<'a'> &
  LinkDefaultProps & { externalLink: true }

export type NextLinkProps = _NextLinkProps &
  LinkDefaultProps & { externalLink?: never }

export type LinkBaseProps = ExternalLinkProps | NextLinkProps

const isExternalLink = (props: LinkBaseProps): props is ExternalLinkProps =>
  'externalLink' in props

const isNextLink = (props: LinkBaseProps): props is NextLinkProps =>
  !('externalLink' in props)

export const LinkBase = forwardRef<
  HTMLAnchorElement,
  LinkBaseProps & { children: ReactNode }
>((props, ref) => {
  if (isExternalLink(props)) {
    const { externalLink, children, ...rest } = props
    return (
      <a {...rest} ref={ref}>
        {children}
      </a>
    )
  }
  if (isNextLink(props)) {
    return <Link {...props} ref={ref} />
  }
})

LinkBase.displayName = 'Link'
