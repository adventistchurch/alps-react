/**
 * Flex Configurations & methods
 */

import { getBaseClass } from './commons'

export const flexClass = 'u-flex'
export const flexColumnClass = `${flexClass}-direction--column`

export const flexAlignOptions = ['center', 'end']
export const flexJustifyOptions = ['between', 'center', 'start']

export function getFlexClass({ align, end, justify, noWrap, wrap } = {}) {
  return getBaseClass(flexClass, [
    align ? `align-${align}` : null,
    justify ? `justify-${justify}` : null,
    end ? 'end' : null,
    wrap ? 'wrap' : noWrap ? 'nowrap' : null,
  ])
}
