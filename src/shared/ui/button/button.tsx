import { forwardRef, ReactNode } from 'react'
import { Typography } from '@shared/ui'
import { ButtonBase } from '@shared/ui/button-base'
import { bindPropsStyler } from '@shared/utils'
import styles from './button.module.scss'

interface ButtonProps {
  children: ReactNode
  className: string
  onClick?: () => void
  variant?: 'regular' | 'success' | 'error'
}

const buttonStyles = bindPropsStyler(styles)

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { children, className, variant = 'regular' } = props
  const buttonClassNames = buttonStyles('button', { className, variant })
  return (
    <ButtonBase onClick={() => {}} className={buttonClassNames} ref={ref}>
      <Typography.Body
        as={'span'}
        color={'inherit'}
        cropLineHeight={false}
        transform={'none'}
      >
        {children}
      </Typography.Body>
    </ButtonBase>
  )
})

Button.displayName = 'Button'
