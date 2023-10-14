import { useContext } from 'react'
import {
  ComposedComponentProps,
  HeadingProps,
  SubHeadingProps,
  TypographyContext,
} from '.'
import styles from './typography.module.scss'
import clsx from 'clsx'

/**
 * Merge typography props in one object from component props, context props and default props with defined priority and build universal styles for the component
 * @returns Cortege with all merged props and builded universal styles
 */
const usePropsMerge = <T extends ComposedComponentProps>(
  componentProps: T,
  defaultProps: Partial<T>
): [T, string] => {
  const contextProps = useContext(TypographyContext)
  const mergedProps = Object.assign(
    {},
    defaultProps,
    contextProps,
    componentProps
  )
  const { align, transform, color, cropLineHeight, font, className } =
    mergedProps
  const universalStyles = clsx(
    font && styles[`font_${font}`],
    align && styles[`align_${align}`],
    transform && styles[`transform_${transform}`],
    color && styles[`color_${color}`],
    cropLineHeight && styles['cropLineHeight'],
    className
  )

  return [mergedProps, universalStyles]
}

export const useHeadingProps = (headingProps: HeadingProps) =>
  usePropsMerge(headingProps, {
    align: 'center',
    color: 'black',
    transform: 'uppercase',
    cropLineHeight: false,
    font: 'nunito',
  })

export const useSubHeadingProps = (headingProps: SubHeadingProps) =>
  usePropsMerge(headingProps, {
    align: 'center',
    color: 'black',
    transform: 'uppercase',
    cropLineHeight: false,
    font: 'nunito',
  })

export const useBodyProps = (headingProps: ComposedComponentProps) =>
  usePropsMerge(headingProps, {
    align: 'left',
    color: 'black',
    transform: 'none',
    cropLineHeight: false,
    font: 'rubik',
  })
