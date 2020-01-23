import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function GridItem({
  children,
  noItemClass,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
  ...props
}) {
  return (
    <Element
      {...props}
      gridItem
      gridItemSize={size}
      gridItemSizeAtS={sizeAtS}
      gridItemSizeAtM={sizeAtM}
      gridItemSizeAtL={sizeAtL}
      gridItemSizeAtXL={sizeAtXL}
      noGridItemClass={noItemClass}
    >
      {children}
    </Element>
  )
}

GridItem.propTypes = {
  as: PropTypes.oneOf(['article', 'div']),
  children: PropTypes.node,
  className: PropTypes.string,
  noItemClass: Element.propTypes.noGridItemClass,
  size: Element.propTypes.gridItemSize,
  sizeAtS: Element.propTypes.gridItemSizeAtS,
  sizeAtM: Element.propTypes.gridItemSizeAtM,
  sizeAtL: Element.propTypes.gridItemSizeAtL,
  sizeAtXL: Element.propTypes.gridItemSizeAtXL,
  ...Element.propTypes,
}
GridItem.defaultProps = {
  as: 'div',
  noItemClass: false,
}

export default GridItem
