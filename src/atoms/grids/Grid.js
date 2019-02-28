import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import {
  getGridClass,
  shiftBreakpoints,
  shiftSides,
  wrapSizes,
} from '../global/grids'

function Grid({
  as,
  children,
  className,
  noGutters,
  seven,
  sevenInner,
  shiftAt,
  shiftSide,
  wrap,
  ...props
}) {
  const elementClass = getGridClass({
    className,
    noGutters,
    seven,
    sevenInner,
    shiftAt,
    shiftSide,
    wrap,
  })

  return (
    <Element tag={as} className={elementClass} {...props}>
      {children}
    </Element>
  )
}

export const asOptions = ['aricle', 'div', 'section']

Grid.propTypes = {
  as: PropTypes.oneOf(asOptions),
  children: PropTypes.node,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
  seven: PropTypes.bool,
  sevenInner: PropTypes.bool,
  shiftAt: PropTypes.oneOf(shiftBreakpoints),
  shiftSide: PropTypes.oneOf(shiftSides),
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(wrapSizes)]),
  ...Element.propTypes,
}
Grid.defaultProps = {
  as: 'div',
  className: '',
}

export default Grid
