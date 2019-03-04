import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function Grid({
  as,
  children,
  className,
  hasWrapClass,
  noGutters,
  wrap,
  ...props
}) {
  return (
    <Element
      tag={as}
      className={className}
      gridNoGutters={noGutters}
      gridWrap={wrap}
      hasGridWrapClass={hasWrapClass}
      {...props}
    >
      {children}
    </Element>
  )
}

export const asOptions = ['aricle', 'div', 'section']

Grid.propTypes = {
  as: PropTypes.oneOf(asOptions),
  children: PropTypes.node,
  className: PropTypes.string,
  hasWrapClass: Element.propTypes.hasGridWrapClass,
  noGutters: Element.propTypes.gridNoGutters,
  wrap: Element.propTypes.gridWrap,
  ...Element.propTypes,
}
Grid.defaultProps = {
  as: 'div',
  className: '',
  hasGridClass: true,
  hasWrapClass: true,
}

export default Grid
