// Borders

import { sides as commonSides, getBaseClass } from './commons'

export const borderClass = 'u-border'
export const borderSides = [...commonSides, 'none']
export const borderColors = ['red', 'light']

export function getBorderClass({ color, side }) {
  return getBaseClass('u-border', [color, side])
}
