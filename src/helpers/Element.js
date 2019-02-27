import React from 'react'
import PropTypes from 'prop-types'

import {
  backgroundColorClass,
  backgroundColors,
  textColorClass,
  textColors,
  themeBackgroundClass,
  themeBackgroundColors,
  themeColorClass,
  themeColors,
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
    textStyle,
    themeBackgroundColor,
    themeColor,
    transform,
    className,
    ...otherProps
  } = props

  const classes = []

  if (fontType)
    classes.push(`${fontClass}--${fontType}${fontSize ? `--${fontSize}` : ''}`)
  if (color) classes.push(`${textColorClass}--${color}`)
  if (themeColor) classes.push(`${themeColorClass}--${themeColor}`)
  if (backgroundColor)
    classes.push(`${backgroundColorClass}--${backgroundColor}`)
  if (themeBackgroundColor)
    classes.push(`${themeBackgroundClass}--${themeBackgroundColor}`)
  if (textStyle) classes.push(`${textClass}--${textStyle}`)
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
  color: PropTypes.oneOf(textColors),
  backgroundColor: PropTypes.oneOf(backgroundColors),
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
  tag: PropTypes.string,
  textStyle: PropTypes.oneOf(textStyles),
  themeBackround: PropTypes.oneOf(themeBackgroundColors),
  themeColor: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
