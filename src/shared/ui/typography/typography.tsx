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

export interface TypographyUniversalProps {
  align?: 'center' | 'left' | 'right'
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  color?: 'inherit' | 'black' | 'white' | 'success' | 'error'
  font?: 'nunito' | 'rubik'
  cropLineHeight?: boolean
}

export interface TypographyForComponentProps {
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

export type SubHeadingVariants = 'primary' | 'secondary'

export interface SubHeadingProps extends ComposedComponentProps {
  variant: SubHeadingVariants
}

export const SubHeading = forwardRef<HTMLParagraphElement, SubHeadingProps>(
  (props, ref) => {
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
  }
)

SubHeading.displayName = 'TypographySunHeading'

export type BodyTags = 'p' | 'span'
export interface BodyProps extends ComposedComponentProps {
  as: BodyTags
}

export const Body = forwardRef<HTMLParagraphElement, BodyProps>(
  (props, ref) => {
    const {
      children,
      as: Tag,
      align,
      color,
      cropLineHeight,
      font,
      transform,
      className,
    } = useBodyProps(props)
    return (
      <Tag
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
      </Tag>
    )
  }
)

Body.displayName = 'TypographyBody'

export const Typography = Object.assign(TypographyRoot, {
  Heading,
  SubHeading,
  Body,
})
