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
  themeBackgroundTransClass,
  themeBackgroundTransColors,
  themeBorderColorClass,
  themeBorderColors,
  themeColorClass,
  themeColors,
} from '../atoms/global/colors'

import { vishiddenClass } from '../atoms/global/commons'

import {
  fontClass,
  fontSizes,
  fontTypes,
  textStrongClass,
  textTransformClass,
  textTransforms,
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
 * The ubiquitous Element component
 *
 * @param {Object} props All Element's props
 */
export default function Element({ as, children, tag, ...props }) {
  // Extract style-related props to build `className`
  const {
    backgroundColor,
    border,
    borderColor,
    borderSide,
    canBe,
    className,
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
    strong,
    themeBackground,
    themeBackgroundTrans,
    themeBorder,
    themeColor,
    transform,
    vishidden,

    ...otherProps // Other props will be provided here
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
  if (strong) classes.push(`${textStrongClass}`)
  if (transform) classes.push(`${textTransformClass}--${transform}`)

  // - Theme classes
  if (themeBorder) classes.push(`${themeBorderColorClass}--${themeBorder}`)
  if (themeBackground)
    classes.push(`${themeBackgroundClass}--${themeBackground}`)
  if (themeBackgroundTrans)
    classes.push(`${themeBackgroundTransClass}--${themeBackgroundTrans}`)
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

  // - Others

  // Remove from the flow but leave available to screen readers
  if (vishidden) classes.push(vishiddenClass)

  // Build all props
  const allProps = {
    className: classes.length > 0 ? classes.join(' ') : null,
    ...otherProps,
  }

  return React.createElement(tag ? tag : as, allProps, children)
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
  tag: PropTypes.string,
  strong: PropTypes.bool,
  themeBackground: PropTypes.oneOf(themeBackgroundColors),
  themeBackgroundTrans: PropTypes.oneOf(themeBackgroundTransColors),
  themeBorder: PropTypes.oneOf(themeBorderColors),
  themeColor: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
  vishidden: PropTypes.bool,
}
Element.defaultProps = {
  as: 'div',
}

export function HeadingOne(props) {
  return <Element as="h1" {...props} />
}

export function HeadingTwo(props) {
  return <Element as="h2" {...props} />
}

export function HeadingThree(props) {
  return <Element as="h3" {...props} />
}

export function HeadingFour(props) {
  return <Element as="h4" {...props} />
}

export function Paragraph(props) {
  return <Element as="p" {...props} />
}

export function Link(props) {
  return <Element as="a" {...props} />
}

export function Section(props) {
  return <Element as="section" {...props} />
}
