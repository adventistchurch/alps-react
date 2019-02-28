/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

export const sizes = ['quarter', 'half', 'double', 'triple', 'quad', 'zero']
export const sides = ['top', 'bottom', 'left', 'right', 'sides']
export const afterSizes = ['medium', 'large']
export const untilSizes = ['small', 'medium', 'large', 'xxlarge']

function mod(key) {
  return key ? `--${key}` : ''
}

function getBaseClass(baseClass, size, side, extra) {
  return `${baseClass}${mod(size)}${mod(side)}${mod(extra)}`
}

export function getPaddingClass({ size, side }) {
  return getBaseClass('u-padding', size, side)
}

export function getSpaceClass({ size, side }) {
  return getBaseClass('u-space', size, side)
}

export function getSpacingClass({ after, size, side, until }) {
  return getBaseClass(
    'u-spacing',
    size,
    side,
    until ? `until-${until}` : after ? `after-${after}` : null
  )
}
