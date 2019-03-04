import React from 'react'
import PropTypes from 'prop-types'

import {
  borderColors,
  borderAtBreakpoints,
  borderSides,
  getBorderClass,
} from '../atoms/global/borders'

import {
  backgroundColorClass,
  backgroundColors,
  canBeClass,
  canBeColors,
  getThemeBorderClass,
  linkHoverClass,
  linkHoverColors,
  overlayClass,
  overlayColors,
  textColorClass,
  textColors,
  themeBackgroundClass,
  themeBackgroundColors,
  themeBackgroundTransClass,
  themeBackgroundTransColors,
  themeBorderColors,
  themeColorClass,
  themeColors,
  themeLinkHoverClass,
} from '../atoms/global/colors'

import { sides, vishiddenClass } from '../atoms/global/commons'

import {
  flexAlignOptions,
  flexDirectionOptions,
  flexJustifyOptions,
  getFlexClass,
} from '../atoms/global/flex'

import {
  fontSizes,
  fontTypes,
  getFontClass,
  getTextAlignClass,
  textAlignOptions,
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
  spacingSides,
  spacingSizes,
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
    borderAt,
    borderColor,
    borderSide,
    canBe,
    className,
    clearFix,
    color,
    flex,
    flexAlign,
    flexColumn,
    flexJustify,
    fontSize,
    fontType,
    linkHover,
    overlay,
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
    textAlign,
    themeBackground,
    themeBackgroundTrans,
    themeBorder,
    themeBorderSide,
    themeColor,
    themeLinkHover,
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
    classes.push(
      getFontClass({
        type: fontType,
        size: fontSize,
      })
    )
  if (strong) classes.push(`${textStrongClass}`)
  if (transform) classes.push(`${textTransformClass}--${transform}`)
  if (textAlign) classes.push(getTextAlignClass({ align: textAlign }))
  if (linkHover) classes.push(`${linkHoverClass}--${linkHover}`)

  // - Theme classes
  if (themeBorder)
    classes.push(
      getThemeBorderClass({ color: themeBorder, side: themeBorderSide })
    )
  if (themeBackground)
    classes.push(`${themeBackgroundClass}--${themeBackground}`)
  if (themeBackgroundTrans)
    classes.push(`${themeBackgroundTransClass}--${themeBackgroundTrans}`)
  if (themeColor) classes.push(`${themeColorClass}--${themeColor}`)
  if (themeLinkHover) classes.push(`${themeLinkHoverClass}--${themeLinkHover}`)
  if (overlay) classes.push(`${overlayClass}--${overlay}`)

  // - Border classes
  if (border || borderAt || borderColor || borderSide)
    classes.push(
      getBorderClass({
        at: borderAt,
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

  // - Flex
  if (flex || flexAlign || flexColumn || flexJustify) {
    classes.push(
      getFlexClass({
        align: flexAlign,
        column: flexColumn,
        justify: flexJustify,
      })
    )
  }

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
  backgroundColor: PropTypes.oneOf(backgroundColors),
  border: PropTypes.bool,
  borderAt: PropTypes.oneOf(borderAtBreakpoints),
  borderColor: PropTypes.oneOf(borderColors),
  borderSide: PropTypes.oneOf(borderSides),
  canBe: PropTypes.oneOf(canBeColors),
  children: PropTypes.node,
  className: PropTypes.string,
  clearFix: PropTypes.bool,
  color: PropTypes.oneOf(textColors),
  flex: PropTypes.bool,
  flexAlign: PropTypes.oneOf(flexAlignOptions),
  flexColumn: PropTypes.oneOf(flexDirectionOptions),
  flexJustify: PropTypes.oneOf(flexJustifyOptions),
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  linkHover: PropTypes.oneOf(linkHoverColors),
  overlay: PropTypes.oneOf(overlayColors),
  padding: PropTypes.bool,
  paddingSide: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(spacingSides),
  ]),
  paddingSize: PropTypes.oneOf(spacingSizes),
  space: PropTypes.bool,
  spaceSide: PropTypes.oneOf(spacingSides),
  spaceSize: PropTypes.oneOf(spacingSizes),
  spacing: PropTypes.bool,
  spacingAfter: PropTypes.oneOf(afterSizes),
  spacingSide: PropTypes.oneOf(spacingSides),
  spacingSize: PropTypes.oneOf(spacingSizes),
  spacingUntil: PropTypes.oneOf(untilSizes),
  strong: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.oneOf(textAlignOptions),
  themeBackground: PropTypes.oneOf(themeBackgroundColors),
  themeBackgroundTrans: PropTypes.oneOf(themeBackgroundTransColors),
  themeBorder: PropTypes.oneOf(themeBorderColors),
  themeBorderSide: PropTypes.oneOf(sides),
  themeColor: PropTypes.oneOf(themeColors),
  themeLinkHover: PropTypes.oneOf(themeColors),
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
