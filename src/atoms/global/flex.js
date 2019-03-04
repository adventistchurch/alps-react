/**
 * Flex Configurations & methods
 */

import { getBaseClass } from './commons'

// Base
export const flexClass = 'u-flex'
export const flexAlignOptions = ['center', 'end']
export const flexJustifyOptions = ['between', 'center', 'start']

// Direction
export const flexDirectionClass = `${flexClass}-direction`
export const flexDirectionOptions = ['column', 'row']

export function getFlexClass({ align, column, end, justify, noWrap, wrap }) {
  return getBaseClass(column ? flexClass : flexDirectionClass, [
    align
      ? `align-${align}`
      : column
      ? `column`
      : justify
      ? `justify-${justify}`
      : end
      ? 'end'
      : wrap
      ? 'wrap'
      : noWrap
      ? 'nowrap'
      : null,
  ])
}

export function getFlexDirectionClass({ direction }) {
  return getBaseClass(flexDirectionClass, [direction])
}
