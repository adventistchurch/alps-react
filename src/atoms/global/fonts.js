/**
 * Fonts Configurations & methods
 */

import { getBaseClass } from './commons'

export const fontClass = 'u-font'
export const fontTypes = ['primary', 'secondary', 'monospace']
export const fontSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

export const textClass = 'u-text'
export const textStrongClass = `${textClass}--strong`

export const textAlignClass = 'u-text-align'
export const textAlignOptions = ['left', 'center', 'right']

export const textTransformClass = 'u-text-transform'
export const textTransforms = ['upper', 'lower']

export function getFontClass({ size, type }) {
  return getBaseClass(fontClass, [type, size])
}

export function getTextAlignClass({ align }) {
  return getBaseClass(textAlignClass, [align])
}
