/**
 * Flex Configurations & methods
 */

import { getBaseClass } from './commons'

// Sizes and positioning (image/figure)
export const figureSizeClass = 'size'
export const figureAlignClass = 'align'

export const figureSizes = ['', 'small', 'medium', 'large']
export const figureAlignPositions = ['', 'left', 'center', 'right']

export function getFigureSizeClass(size) {
  return getBaseClass(figureSizeClass, [size])
}

export function getFigureAlignClass(align) {
  return align ? `${figureAlignClass}${align}` : ''
}

export function getFigureClasses(align, size) {
  const classes = []

  if (size) classes.push(getFigureSizeClass(size))
  if (align) classes.push(getFigureAlignClass(align))

  return classes.filter(x => Boolean(x)).join(' ')
}
