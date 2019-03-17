import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function Grid({ as, children, noWrapClass, noGutters, wrap, ...props }) {
  return (
    <Element
      tag={as}
      gridNoGutters={noGutters}
      gridWrap={wrap}
      noGridWrapClass={noWrapClass}
      {...props}
    >
      {children}
    </Element>
  )
}

export const asOptions = ['article', 'div', 'section']

Grid.propTypes = {
  as: PropTypes.oneOf(asOptions),
  children: PropTypes.node,
  className: PropTypes.string,
  noWrapClass: Element.propTypes.noGridWrapClass,
  noGutters: Element.propTypes.gridNoGutters,
  wrap: Element.propTypes.gridWrap,
  ...Element.propTypes,
}
Grid.defaultProps = {
  as: 'div',
}

export default Grid
