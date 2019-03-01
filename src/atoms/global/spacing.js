/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

import { sides as commonSides, getBaseClass } from './commons'

export const sizes = ['quarter', 'half', 'double', 'triple', 'quad', 'zero']
export const sides = [...commonSides, 'sides']
export const afterSizes = ['medium', 'large']
export const untilSizes = ['small', 'medium', 'large', 'xxlarge']

export const clearFixClass = 'u-clear-fix'

export function getPaddingClass({ size, side }) {
  return getBaseClass('u-padding', [size, side])
}

export function getSpaceClass({ size, side }) {
  return getBaseClass('u-space', [size, side])
}

export function getSpacingClass({ after, size, side, until }) {
  return getBaseClass('u-spacing', [
    size,
    side,
    until ? `until-${until}` : '',
    after ? `after-${after}` : '',
  ])
}
