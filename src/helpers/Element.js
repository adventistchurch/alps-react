import React from 'react'
import PropTypes from 'prop-types'

import {
  borderColors,
  borderSides,
  getBorderClass,
} from '../atoms/global/borders'

import {
  backgroundColorClass,
  backgroundColors,
  canBeClass,
  canBeColors,
  textColorClass,
  textColors,
  themeBackgroundClass,
  themeBackgroundColors,
  themeBorderColorClass,
  themeBorderColors,
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
  clearFixClass,
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
    border,
    borderColor,
    borderSide,
    canBe,
    clearFix,
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
    style,
    themeBackground,
    themeBorder,
    themeColor,
    transform,
    className,
    ...otherProps
  } = props

  // Set classes:
  const classes = []

  if (className) classes.push(className)

  // - Color classes
  if (backgroundColor)
    classes.push(`${backgroundColorClass}--${backgroundColor}`)
  if (canBe) classes.push(`${canBeClass}--${canBe}`)
  if (color) classes.push(`${textColorClass}--${color}`)

  // - Font classes
  if (fontType)
    classes.push(`${fontClass}--${fontType}${fontSize ? `--${fontSize}` : ''}`)

  if (style) classes.push(`${textClass}--${style}`)
  if (transform) classes.push(`${textTransformClass}--${transform}`)

  // - Theme classes
  if (themeBorder) classes.push(`${themeBorderColorClass}--${themeBorder}`)
  if (themeBackground)
    classes.push(`${themeBackgroundClass}--${themeBackground}`)
  if (themeColor) classes.push(`${themeColorClass}--${themeColor}`)

  // - Border classes
  if (border || borderColor || borderSide)
    classes.push(
      getBorderClass({
        color: borderColor,
        side: borderSide,
      })
    )

  // - Spacing classes

  if (clearFix) classes.push(clearFixClass)

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
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(borderColors),
  borderSide: PropTypes.oneOf(borderSides),
  canBe: PropTypes.oneOf(canBeColors),
  children: PropTypes.node,
  className: PropTypes.string,
  clearFix: PropTypes.bool,
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
  style: PropTypes.oneOf(textStyles),
  tag: PropTypes.string,
  themeBackround: PropTypes.oneOf(themeBackgroundColors),
  themeBorder: PropTypes.oneOf(themeBorderColors),
  themeColor: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
}
Element.defaultProps = {
  as: 'div',
}

export { sides, sizes }

export default Element
