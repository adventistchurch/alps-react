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
  afterSizes,
  getPaddingClass,
  getSpaceClass,
  getSpacingClass,
  sides,
  sizes,
  untilSizes,
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
    spacingAfter,
    spacingSide,
    spacingSize,
    spacingUntil,
    textStyle,
    themeBackground,
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
  if (themeBackground)
    classes.push(`${themeBackgroundClass}--${themeBackground}`)
  if (textStyle) classes.push(`${textClass}--${textStyle}`)
  if (transform) classes.push(`${textTransformClass}--${transform}`)
  if (className) classes.push(className)

  if (padding || paddingSide || paddingSize)
    classes.push(
      getPaddingClass({
        side: paddingSide,
        size: paddingSize,
      })
    )

  if (space || spaceSide || spaceSize)
    classes.push(
      getSpaceClass({
        side: spaceSide,
        size: spaceSize,
      })
    )

  if (spacing || spacingAfter || spacingSide || spacingSize || spacingUntil)
    classes.push(
      getSpacingClass({
        after: spacingAfter,
        side: spacingSide,
        size: spacingSize,
        until: spacingUntil,
      })
    )

  return {
    className: classes.length > 0 ? classes.join(' ') : null,
    ...otherProps,
  }
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
  paddingSide: PropTypes.oneOf(sides),
  paddingSize: PropTypes.oneOf(sizes),
  space: PropTypes.bool,
  spaceSide: PropTypes.oneOf(sides),
  spaceSize: PropTypes.oneOf(sizes),
  spacing: PropTypes.bool,
  spacingAfter: PropTypes.oneOf(afterSizes),
  spacingSide: PropTypes.oneOf(sides),
  spacingSize: PropTypes.oneOf(sizes),
  spacingUntil: PropTypes.oneOf(untilSizes),
  tag: PropTypes.string,
  textStyle: PropTypes.oneOf(textStyles),
  themeBackground: PropTypes.oneOf(themeBackgroundColors),
  themeColor: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
