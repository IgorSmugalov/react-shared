'use client'

import React, { FC, ReactNode, createContext } from 'react'
import styles from './typography.module.scss'
import {
  useBodyProps,
  useHeadingProps,
  useSubHeadingProps,
} from './typography.hooks'
import { styler } from '@shared/utils'

interface TypographyUniversalProps {
  align?: 'center' | 'left' | 'right'
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  color?: 'black' | 'white' | 'waterBlue' | 'success' | 'error'
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

export const Heading: FC<HeadingProps> = (props) => {
  const { children, ...styledProps } = useHeadingProps(props)
  const HeadingTag: keyof React.JSX.IntrinsicElements = `h${styledProps.lvl}`
  return (
    <HeadingTag className={styler(styles, 'heading', styledProps)}>
      {children}
    </HeadingTag>
  )
}

// SubHeading

type SubHeadingVariants = 'primary' | 'secondary'

export interface SubHeadingProps extends ComposedComponentProps {
  variant: SubHeadingVariants
}

export const SubHeading: FC<SubHeadingProps & TypographyUniversalProps> = (
  props
) => {
  const { children, ...styledProps } = useSubHeadingProps(props)
  return <p className={styler(styles, 'subHeading', styledProps)}>{children}</p>
}

// Text

export const Body: FC<ComposedComponentProps> = (props) => {
  const { children, ...styledProps } = useBodyProps(props)
  return <p className={styler(styles, 'body', styledProps)}>{children}</p>
}

// Exports

export const Typography = Object.assign(TypographyRoot, {
  Heading,
  SubHeading,
  Body,
})
