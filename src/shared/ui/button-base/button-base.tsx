import {
  ComponentPropsWithRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'
import { LinkBase, LinkBaseProps } from '@shared/ui/link-base'
// import styles from './button-base.module.scss'

type ButtonWithTypeProps = ComponentPropsWithRef<'button'> & {
  href?: never
  onClick?: () => void
  type: string
}

type ButtonWithOnClickProps = ComponentPropsWithRef<'button'> & {
  href?: never
  onClick: () => void
  type?: string
}

type LinkAsButtonProps = LinkBaseProps & {
  href: string
  onClick?: () => void
  type?: never
}

type ButtonBaseProps =
  | ButtonWithOnClickProps
  | ButtonWithTypeProps
  | LinkAsButtonProps

const isLink = (props: ButtonBaseProps): props is LinkAsButtonProps =>
  'href' in props && props.href !== undefined

const isButton = (
  props: ButtonBaseProps
): props is ButtonWithOnClickProps | ButtonWithTypeProps =>
  'onClick' in props || 'type' in props

export const ButtonBase = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonBaseProps & { children: ReactNode }
>((props, ref) => {
  const { className, children, ...rest } = props
  if (isButton(rest)) {
    return (
      <button {...rest} ref={ref as ForwardedRef<HTMLButtonElement>}>
        {children}
      </button>
    )
  }
  if (isLink(rest)) {
    return (
      <LinkBase {...rest} ref={ref as ForwardedRef<HTMLAnchorElement>}>
        {children}
      </LinkBase>
    )
  }
})

ButtonBase.displayName = 'ButtonBase'
