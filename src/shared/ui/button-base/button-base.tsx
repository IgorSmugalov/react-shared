import {
  ComponentPropsWithRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'
import { LinkBase, LinkBaseProps } from '@shared/ui/link-base'
import styles from './button-base.module.scss'
import { bindPropsStyler } from '@shared/utils'

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

const buttonBaseStyles = bindPropsStyler(styles)

export const ButtonBase = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonBaseProps & { children: ReactNode }
>((props, ref) => {
  const { children, className, ...rest } = props
  const buttonBaseClassName = buttonBaseStyles('buttonBase', { className })
  if (isButton(rest)) {
    return (
      <button
        {...rest}
        className={buttonBaseClassName}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  }
  if (isLink(rest)) {
    return (
      <LinkBase
        {...rest}
        className={buttonBaseClassName}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </LinkBase>
    )
  }
})

ButtonBase.displayName = 'ButtonBase'
