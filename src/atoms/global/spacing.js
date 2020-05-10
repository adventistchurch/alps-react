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
  // side can be an array
  const sides = Array.isArray(side) ? side : [side]
  return sides.map(side => getBaseClass('u-padding', [size, side])).join(' ')
}

export function getSpaceClass({ after, size, side } = {}) {
  // To support multiple sides, `side` can be an `array`
  const sides = Array.isArray(side) ? side : [side]
  return sides
    .map((side, i) => {
      // size can be an array where every item correspond to one in the array of sides.
      const _size = Array.isArray(size) ? size[i] : size
      return getBaseClass('u-space', [_size, side, afterMod(after)])
    })
    .join(' ')
}

export function getSpacingClass({ after, size, until } = {}) {
  return getBaseClass('u-spacing', [size, untilMod(until), afterMod(after)])
}
