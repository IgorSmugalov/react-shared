type CssStyles = { readonly [x: string]: string }
type PropTypes = string | number | boolean | undefined
type StyledProps = Record<string, PropTypes>

const isStringModifier = (value: PropTypes) =>
  typeof value === 'string' || typeof value === 'number'

const isBooleanModifier = (value: PropTypes) => typeof value === 'boolean'

/**
 * Util for constructing className, working with CSS-Modules, props and BEM-like methodology:
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
    // no values for modifier in stylesheet
    if (!modifierValue) continue
    if (isStringModifier(modifierValue)) {
      // if styles passed from className prop
      if (modifier === 'className') {
        classNames += modifierValue + ' '
      } else {
        // if styles passed from another prop
        classNames += css[`${rootElement}_${modifier}_${modifierValue}`] + ' '
      }
      continue
    }
    if (isBooleanModifier(modifierValue))
      classNames += css[`${rootElement}_${modifier}`] + ' '
  }
  return classNames
}

export const bindPropsStyler =
  (css: CssStyles) => (rootElement: string, styledProps: StyledProps) =>
    propsStyler(css, rootElement, styledProps)
