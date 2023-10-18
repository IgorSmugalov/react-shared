type CssStyles = { readonly [x: string]: string }
type StyledProps = Record<string, string | number | boolean | undefined>

/**
 * Util for constructing className, working with CSS-Modules, props and BEM-methodology:
 * [BEM]_[modifier]_[modifierValue] or [BEM]_[modifier]
 * Where:
 * [BEM] is 'block' or 'block__element' name
 * [modifier] is key of react component props
 * [modifierValue] is key value: string | number | boolean
 *
 * if modifier is string or number => generated block_modifier_value classname, as 'button_color_red'
 * if modifier is boolean and boolean is true => generated block_modifier classname, as 'button_disabled'
 *
 * @param css - CSS Modules Stylesheet
 * @param rootElement - root element for applying styles
 * @param styledProps - object with props, where every key is modifier
 * @return {string} - classNames string with basic class and all modifiers
 */
export function propsStyler(
  css: CssStyles,
  rootElement: string,
  styledProps: StyledProps
): string {
  let classNames: string = css[rootElement] + ' '
  for (const modifier in styledProps) {
    const modifierValue = styledProps[modifier]
    if (!modifierValue) continue
    let className: undefined | string
    if (typeof modifierValue === 'string' || typeof modifierValue === 'number')
      className = css[`${rootElement}_${modifier}_${modifierValue}`]
    else className = css[`${rootElement}_${modifier}`]
    if (className) classNames += className + ' '
  }
  return classNames
}

export const bindPropsStyler =
  (css: CssStyles) => (rootElement: string, styledProps: StyledProps) =>
    propsStyler(css, rootElement, styledProps)
