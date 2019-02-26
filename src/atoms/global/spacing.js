/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

export const sizes = ['quarter', 'half', 'double', 'triple', 'quad', 'zero']
export const sides = ['top', 'bottom', 'left', 'right']

function mod(key) {
  return key ? `--${key}` : ''
}

function getBaseClass(baseClass, size, side) {
  return `${baseClass}${mod(size)}${mod(side)}`
}

export function getPaddingClass({ size, side }) {
  return getBaseClass('u-padding', size, side)
}

export function getSpaceClass({ size, side }) {
  return getBaseClass('u-space', size, side)
}

export function getSpacingClass({ size, side }) {
  return getBaseClass('u-spacing', size, side)
}
