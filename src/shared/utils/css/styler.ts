import clsx from 'clsx'

type CssStyles = { readonly [x: string]: string }
type StyleProps = Record<string, string | boolean | number | undefined>

export function styler(css: CssStyles, root: string, styleProps: StyleProps) {
  const styles: string[] = [css[root]]
  for (const key in styleProps) {
    const value = styleProps[key]
    if (typeof value === 'string' || typeof value === 'number')
      styles.push(css[`${root}__${key}_${value}`])
    if (typeof value === 'boolean' && value) styles.push(css[`${root}__${key}`])
    console.log(`${root}__${key}`)
  }
  return clsx(styles)
}

export class Styler {
  private readonly styles: CssStyles
  constructor(styles: CssStyles) {
    this.styles = styles
  }
  style(root: string, styleProps: StyleProps) {
    return styler(this.styles, root, styleProps)
  }
}
