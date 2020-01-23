import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import { wrapSizes } from '../global/grids'

function Grid({
  as,
  blockRow,
  children,
  noWrapClass,
  noGutters,
  seven,
  sevenInner,
  wrap,
  ...props
}) {
  return (
    <Element
      blockRow={blockRow}
      gridNoGutters={noGutters}
      gridWrap={wrap}
      noGridWrapClass={noWrapClass}
      seven={seven}
      sevenInner={sevenInner}
      tag={as}
      {...props}
    >
      {children}
    </Element>
  )
}

export const asOptions = ['article', 'div', 'section']

Grid.propTypes = {
  as: PropTypes.oneOf(asOptions),
  blockRow: Element.propTypes.blockRow,
  children: PropTypes.node,
  noWrapClass: Element.propTypes.noGridWrapClass,
  noGutters: Element.propTypes.gridNoGutters,
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(wrapSizes)]),
  seven: PropTypes.bool,
  sevenInner: PropTypes.bool,
  ...Element.propTypes,
}
Grid.defaultProps = {
  as: 'div',
  wrap: true,
}

export { wrapSizes }

export default Grid
