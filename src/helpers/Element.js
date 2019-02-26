import React from 'react'
import PropTypes from 'prop-types'

import {
  themeBackgroundClass,
  themeBackgroundColors,
  themeForegroundClass,
  themeForegroundColors,
} from '../atoms/global/colors'

import {
  fontClass,
  fontSizes,
  fontTypes,
  textClass,
  textTransformClass,
  textTransforms,
  styles,
} from '../atoms/global/fonts'

import {
  getPaddingClass,
  getSpaceClass,
  getSpacingClass,
  sides,
  sizes,
} from '../atoms/global/spacing'

function Element({
  as,
  backgroundColor,
  children,
  color,
  fontSize,
  fontType,
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
  style,
  transform,
  className,
  ...props
}) {
  const classes = [className]

  if (fontType && fontSize)
    classes.push(`${fontClass}--${fontType}--${fontSize}`)
  if (color) classes.push(`${themeForegroundClass}--${color}`)
  if (backgroundColor) classes.push(`${themeBackgroundClass}--${color}`)
  if (style) classes.push(`${textClass}--${style}`)
  if (transform) classes.push(`${textTransformClass}--${transform}`)
  if (className) classes.push(className)

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
  color: PropTypes.oneOf(themeForegroundColors),
  backgroundColor: PropTypes.oneOf(themeBackgroundColors),
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  padding: PropTypes.bool,
  paddingSize: PropTypes.oneOf(sides),
  paddingSide: PropTypes.oneOf(sizes),
  space: PropTypes.bool,
  spaceSide: PropTypes.oneOf(sides),
  spaceSize: PropTypes.oneOf(sizes),
  spacing: PropTypes.bool,
  spacingSide: PropTypes.oneOf(sides),
  spacingSize: PropTypes.oneOf(sizes),
  style: PropTypes.oneOf(styles),
  tag: PropTypes.string,
  transform: PropTypes.oneOf(textTransforms),
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
