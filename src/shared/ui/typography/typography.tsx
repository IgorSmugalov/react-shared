'use client'

import { FC, ReactNode, createContext } from 'react'
import clsx from 'clsx'
import styles from './typography.module.scss'
import {
  useBodyProps,
  useHeadingProps,
  useSubHeadingProps,
} from './typography.hooks'

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
  const [{ lvl, children }, universalStyles] = useHeadingProps(props)
  const HeadingTag: keyof JSX.IntrinsicElements = `h${lvl}`
  return (
    <HeadingTag
      className={clsx(
        styles.heading,
        styles[`heading_${lvl}`],
        universalStyles
      )}
    >
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
  const [{ children, variant }, universalStyles] = useSubHeadingProps(props)
  return (
    <p
      className={clsx(
        styles.subHeading,
        styles[`subHeading_${variant}`],
        universalStyles
      )}
    >
      {children}
    </p>
  )
}

// Text

export const Body: FC<ComposedComponentProps> = (props) => {
  const [{ children }, universalStyles] = useBodyProps(props)
  return <p className={clsx(styles.body, universalStyles)}>{children}</p>
}

// Exports

export const Typography = Object.assign(TypographyRoot, {
  Heading,
  SubHeading,
  Body,
})
