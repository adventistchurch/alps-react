import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function GridItem({
  as,
  children,
  className,
  hasItemClass,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
  ...props
}) {
  const gridItemProps = {
    gridItemSize: size,
    gridItemSizeAtS: sizeAtS,
    gridItemSizeAtM: sizeAtM,
    gridItemSizeAtL: sizeAtL,
    gridItemSizeAtXL: sizeAtXL,
    hasGridItemClass: hasItemClass,
  }

  return (
    <Element as={as} className={className} {...props} {...gridItemProps}>
      {children}
    </Element>
  )
}

GridItem.propTypes = {
  as: PropTypes.oneOf(['article', 'div']),
  children: PropTypes.node,
  className: PropTypes.string,
  hasItemClass: Element.propTypes.hasGridItemClass,
  size: Element.propTypes.gridItemSize,
  sizeAtS: Element.propTypes.gridItemSizeAtS,
  sizeAtM: Element.propTypes.gridItemSizeAtM,
  sizeAtL: Element.propTypes.gridItemSizeAtL,
  sizeAtXL: Element.propTypes.gridItemSizeAtXL,
  ...Element.propTypes,
}
GridItem.defaultProps = {
  as: 'div',
  hasItemClass: true,
  className: '',
}

export default GridItem
