/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

import { getBaseClass } from './commons'

export const spacingSizes = [
  true,
  false,
  'quarter',
  'half',
  'double',
  'triple',
  'quad',
  'zero',
]
export const spaceAfterSizes = ['medium']
export const spacingAfterSizes = ['medium', 'large']
export const spacingUntilSizes = ['small', 'medium', 'large', 'xxlarge']

export const clearFixClass = 'u-clear-fix'

const afterMod = after => (after ? `after-${after}` : null)
const untilMod = until => (until ? `until-${until}` : null)

export function getPaddingClass(side, size, until) {
  return getBaseClass('u-padding', [size, side, untilMod(until)])
}

export function getSpaceClass(side, size, after) {
  return getBaseClass('u-space', [size, side, afterMod(after)])
}

export function getSpacingClass(side, size, after, until) {
  return getBaseClass('u-spacing', [
    size,
    side,
    afterMod(after),
    untilMod(until),
  ])
}
