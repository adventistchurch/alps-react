import React from 'react'
import PropTypes from 'prop-types'

import {
  getPaddingClass,
  getSpaceClass,
  getSpacingClass,
  sides,
  sizes,
} from '../atoms/global/spacing'

function Element({
  as,
  children,
  padding,
  paddingSide,
  paddingSize,
  space,
  spaceSide,
  spaceSize,
  spacing,
  spacingSide,
  spacingSize,
  tag,
  className,
  ...props
}) {
  const classes = [className]

  if (padding || paddingSide || paddingSize)
    classes.push(
      getPaddingClass({
        size: paddingSide,
        side: paddingSize,
      })
    )

  if (space || spaceSide || spaceSize)
    classes.push(
      getSpaceClass({
        size: spaceSize,
        side: spaceSide,
      })
    )

  if (spacing || spacingSide || spacingSize)
    classes.push(
      getSpacingClass({
        size: spacingSize,
        side: spacingSide,
      })
    )

  const classNames = classes.join(' ')

  return React.createElement(
    tag ? tag : as,
    { className: classNames, ...props },
    children
  )
}

Element.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.bool,
  paddingSize: PropTypes.oneOf(sides),
  paddingSide: PropTypes.oneOf(sizes),
  space: PropTypes.bool,
  spaceSide: PropTypes.oneOf(sides),
  spaceSize: PropTypes.oneOf(sizes),
  spacing: PropTypes.bool,
  spacingSide: PropTypes.oneOf(sides),
  spacingSize: PropTypes.oneOf(sizes),
  tag: PropTypes.string,
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
