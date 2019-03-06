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
export const afterSizes = ['medium', 'large']
export const untilSizes = ['small', 'medium', 'large', 'xxlarge']

export const clearFixClass = 'u-clear-fix'

export function getPaddingClass({ size, side }) {
  const sides = Array.isArray(side) ? side : [side] // side can be an array
  return sides.map(side => getBaseClass('u-padding', [size, side])).join(' ')
}

export function getSpaceClass({ size, side }) {
  return getBaseClass('u-space', [size, side])
}

export function getSpacingClass({ after, size, until }) {
  return getBaseClass('u-spacing', [
    size,
    until ? `until-${until}` : '',
    after ? `after-${after}` : '',
  ])
}
