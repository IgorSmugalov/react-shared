'use client'

import React, { FC, ReactNode, createContext, forwardRef } from 'react'
import styles from './typography.module.scss'
import {
  useBodyProps,
  useHeadingProps,
  useSubHeadingProps,
} from './typography.hooks'
import { bindPropsStyler } from '@shared/utils'

const styler = bindPropsStyler(styles)

interface TypographyUniversalProps {
  align?: 'center' | 'left' | 'right'
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  color?: 'black' | 'white' | 'success' | 'error'
  font?: 'nunito' | 'rubik'
  cropLineHeight?: boolean
}

interface TypographyForComponentProps {
  children: ReactNode
  className?: string
}

export type ComposedComponentProps = TypographyForComponentProps &
  TypographyUniversalProps

export const TypographyContext = createContext<TypographyUniversalProps>({})

const TypographyRoot: FC<ComposedComponentProps> = ({
  children,
  className,
  ...contextProps
}) => {
  return (
    <TypographyContext.Provider value={contextProps}>
      <div className={className}>{children}</div>
    </TypographyContext.Provider>
  )
}

// Heading

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends ComposedComponentProps {
  lvl: HeadingLevels
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      lvl,
      align,
      color,
      cropLineHeight,
      font,
      transform,
      className,
    } = useHeadingProps(props)
    const HeadingTag: keyof React.JSX.IntrinsicElements = `h${lvl}`
    console.log(props)
    return (
      <HeadingTag
        className={styler('heading', {
          lvl,
          font,
          color,
          align,
          transform,
          cropLineHeight,
          className,
        })}
        ref={ref}
      >
        {children}
      </HeadingTag>
    )
  }
)

Heading.displayName = 'TypographyHeading'

type SubHeadingVariants = 'primary' | 'secondary'

export interface SubHeadingProps extends ComposedComponentProps {
  variant: SubHeadingVariants
}

export const SubHeading = forwardRef<
  HTMLParagraphElement,
  SubHeadingProps & TypographyUniversalProps
>((props, ref) => {
  const {
    children,
    variant,
    align,
    color,
    cropLineHeight,
    font,
    transform,
    className,
  } = useSubHeadingProps(props)
  return (
    <p
      className={styler('subHeading', {
        variant,
        font,
        color,
        align,
        transform,
        cropLineHeight,
        className,
      })}
      ref={ref}
    >
      {children}
    </p>
  )
})

SubHeading.displayName = 'TypographySunHeading'

export const Body = forwardRef<HTMLParagraphElement, ComposedComponentProps>(
  (props, ref) => {
    const {
      children,
      align,
      color,
      cropLineHeight,
      font,
      transform,
      className,
    } = useBodyProps(props)
    return (
      <p
        className={styler('body', {
          align,
          color,
          cropLineHeight,
          font,
          transform,
          className,
        })}
        ref={ref}
      >
        {children}
      </p>
    )
  }
)

Body.displayName = 'TypographyBody'

export const Typography = Object.assign(TypographyRoot, {
  Heading,
  SubHeading,
  Body,
})
