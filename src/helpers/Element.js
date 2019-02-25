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
  paddingSide,
  paddingSize,
  spaceSide,
  spaceSize,
  spacingSide,
  spacingSize,
  tag,
  className,
  ...props
}) {
  const classes = [className]

  if (paddingSize || paddingSide)
    classes.push(
      getPaddingClass({
        size: spaceSize,
        side: spaceSide,
      })
    )

  if (spaceSize || spaceSide)
    classes.push(
      getSpaceClass({
        size: spaceSize,
        side: spaceSide,
      })
    )

  if (spacingSize || spacingSide)
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
  paddingSize: PropTypes.oneOf(sides),
  paddingSide: PropTypes.oneOf(sizes),
  spaceSide: PropTypes.oneOf(sides),
  spaceSize: PropTypes.oneOf(sizes),
  spacingSide: PropTypes.oneOf(sides),
  spacingSize: PropTypes.oneOf(sizes),
  tag: PropTypes.string,
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
