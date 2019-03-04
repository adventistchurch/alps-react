/**
 * Borders Configurations & methods
 */

import { sides as commonSides, getBaseClass } from './commons'

export const borderClass = 'u-border'
export const borderSides = [...commonSides, 'none']
export const borderColors = ['red', 'light']
export const borderAtBreakpoints = ['small', 'medium', 'large', 'xxlarge']

export function getBorderClass({ at, color, side }) {
  return at
    ? `${borderClass}-${side}--${color}--at-${at}`
    : getBaseClass(borderClass, [color, side])
}
