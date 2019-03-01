import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import { getGridItemClass } from '../global/grids'

function GridItem({
  as,
  children,
  className,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
  ...props
}) {
  const elementClass = getGridItemClass({
    className,
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
  size: sizePropType,
  sizeAtS: sizePropType,
  sizeAtM: sizePropType,
  sizeAtL: sizePropType,
  sizeAtXL: sizePropType,
}
GridItem.defaultProps = {
  as: 'div',
  className: '',
}

export default GridItem
