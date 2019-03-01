import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import { getGridItemClass } from '../global/grids'

function GridItem({
  as,
  children,
  className,
  noItemClass,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
  ...props
}) {
  const elementClass = getGridItemClass({
    className,
    noItemClass,
    size,
    sizeAtS,
    sizeAtM,
    sizeAtL,
    sizeAtXL,
  })

  return (
    <Element as={as} className={elementClass} {...props}>
      {children}
    </Element>
  )
}

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

GridItem.propTypes = {
  as: PropTypes.oneOf(['article', 'div']),
  children: PropTypes.node,
  className: PropTypes.string,
  noItemClass: PropTypes.bool, // TODO: This is required as some items, like `.c-drawer__container` has a "grid-item"'s size class, but not `.l-grid-item`,
  size: sizePropType,
  sizeAtS: sizePropType,
  sizeAtM: sizePropType,
  sizeAtL: sizePropType,
  sizeAtXL: sizePropType,
}
GridItem.defaultProps = {
  as: 'div',
  noItemClass: false,
  className: '',
}

export default GridItem
