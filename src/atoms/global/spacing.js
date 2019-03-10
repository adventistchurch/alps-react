/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

import { sides as commonSides, getBaseClass } from './commons'

export const spacingSizes = [
  'quarter',
  'half',
  'double',
  'triple',
  'quad',
  'zero',
]
export const spaceSides = [...commonSides, 'sides']
export const spaceAfterSizes = ['medium']
export const spacingAfterSizes = ['medium', 'large']
export const spacingUntilSizes = ['small', 'medium', 'large', 'xxlarge']

export const clearFixClass = 'u-clear-fix'

const afterMod = after => (after ? `after-${after}` : null)
const untilMod = until => (until ? `until-${until}` : null)

export function getPaddingClass({ size, side } = {}) {
  const sides = Array.isArray(side) ? side : [side] // side can be an array
  return sides.map(side => getBaseClass('u-padding', [size, side])).join(' ')
}

export function getSpaceClass({ after, size, side } = {}) {
  return getBaseClass('u-space', [size, side, afterMod(after)])
}

export function getSpacingClass({ after, size, until } = {}) {
  return getBaseClass('u-spacing', [size, untilMod(until), afterMod(after)])
}
