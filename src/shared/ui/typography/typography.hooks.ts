import { useContext } from 'react'
import {
  ComposedComponentProps,
  HeadingProps,
  SubHeadingProps,
  TypographyContext,
} from '.'

/**
 * Merge typography props in one object from component props, context props and default props with defined priority
 */
const usePropsMerge = <T extends ComposedComponentProps>(
  componentProps: T,
  defaultProps: Partial<T>
): T => {
  const contextProps = useContext(TypographyContext)
  return Object.assign({}, defaultProps, contextProps, componentProps)
}

export const headingDefaultProps: Partial<HeadingProps> = {
  align: 'center',
  color: 'black',
  transform: 'uppercase',
  cropLineHeight: false,
  font: 'nunito',
}

export const useHeadingProps = (headingProps: HeadingProps) =>
  usePropsMerge(headingProps, headingDefaultProps)

export const subHeaderDefaultProps: Partial<SubHeadingProps> = {
  align: 'center',
  color: 'black',
  transform: 'uppercase',
  cropLineHeight: false,
  font: 'nunito',
}

export const useSubHeadingProps = (headingProps: SubHeadingProps) =>
  usePropsMerge(headingProps, subHeaderDefaultProps)

export const bodyDefaultProps: Partial<ComposedComponentProps> = {
  align: 'left',
  color: 'black',
  transform: 'none',
  cropLineHeight: false,
  font: 'rubik',
}

export const useBodyProps = (headingProps: ComposedComponentProps) =>
  usePropsMerge(headingProps, bodyDefaultProps)
