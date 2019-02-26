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
  textStyles,
} from '../atoms/global/fonts'

import {
  getPaddingClass,
  getSpaceClass,
  getSpacingClass,
  sides,
  sizes,
} from '../atoms/global/spacing'

/**
 * Element's props parser
 *
 * - It extracts _style-related_ props to build the `className` prop.
 * - Then return it along with the rest of _non-style-related_ props.
 * @param {Object} props All Element's props
 */
function parseProps(props) {
  const {
    backgroundColor,
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
    style,
    transform,
    className,
    ...otherProps
  } = props

  const classes = []

  if (fontType)
    classes.push(`${fontClass}--${fontType}${fontSize ? `--${fontSize}` : ''}`)
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

  return { className: classes.join(' '), ...otherProps }
}

/**
 * The ubiquitous Element component
 *
 * @param {Object} props Element props
 */
function Element({ as, children, tag, ...props }) {
  return React.createElement(tag ? tag : as, parseProps(props), children)
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
  style: PropTypes.oneOf(textStyles),
  tag: PropTypes.string,
  transform: PropTypes.oneOf(textTransforms),
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
