import React from 'react'
import PropTypes from 'prop-types'

import useLinkContext from './useLinkContext'

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
  getSvgFillClass,
  linkHoverClass,
  linkHoverColors,
  overlayClass,
  overlayColors,
  svgFillColors,
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
  themePathFillClass,
  linkColors,
  linkClass,
} from '../atoms/global/colors'

import {
  getBaseClass,
  displayClass,
  displayOptions,
  positionClass,
  positionOptions,
  sides,
  vishiddenClass,
} from '../atoms/global/commons'

import {
  flexAlignOptions,
  flexColumnClass,
  flexJustifyOptions,
  getFlexClass,
} from '../atoms/global/flex'

import {
  fontSizes,
  fontTypes,
  fontWeightClass,
  fontWeights,
  getFontClass,
  getTextAlignClass,
  textAlignOptions,
  textStrongClass,
  textTransformClass,
  textTransforms,
} from '../atoms/global/fonts'

import {
  getGridClass,
  getGridItemClass,
  gridBreaks,
  shiftBreakpoints,
  shiftSides,
  wrapSizes,
} from '../atoms/global/grids'

import {
  clearFixClass,
  getPaddingClass,
  getSpaceClass,
  getSpacingClass,
  spaceAfterSizes,
  spaceSides,
  spacingSizes,
  spacingAfterSizes,
  spacingUntilSizes,
} from '../atoms/global/spacing'

function getClassNameAndOtherProps(props) {
  // Extract style-related props to build `className`
  const {
    allowSelect,
    backgroundColor,
    blockRow,
    border,
    borderAt,
    borderColor,
    borderSide,
    canBe,
    className,
    clearFix,
    color,
    display,
    flex,
    flexAlign,
    flexColumn,
    flexEnd,
    flexJustify,
    flexNoWrap,
    flexWrap,
    fontSize,
    fontType,
    fontWeight,
    gridBreak,
    gridItem,
    gridItemSize,
    gridItemSizeAtS,
    gridItemSizeAtM,
    gridItemSizeAtL,
    gridItemSizeAtXL,
    noGridClass,
    noGridItemClass,
    noGridWrapClass,
    gridWrap,
    gridNoGutters,
    linkColor,
    linkHoverColor,
    overlay,
    padding,
    paddingSide,
    paddingSize,
    pathFill,
    position,
    seven,
    sevenInner,
    shiftAt,
    shiftSide,
    space,
    spaceSide,
    spaceSize,
    spacing,
    spacingAfter,
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
    themePathFill,
    transform,
    vishidden,

    ...otherProps // Other props will be provided here
  } = props

  // Set classes:
  const classes = []

  // Split className string and remove empty spaces
  if (className) classes.push(...className.split(' ').filter(Boolean))

  // - Color classes
  if (backgroundColor)
    classes.push(getBaseClass(backgroundColorClass, backgroundColor))
  if (canBe) classes.push(getBaseClass(canBeClass, canBe))
  if (color) classes.push(getBaseClass(textColorClass, color))
  if (pathFill) classes.push(getSvgFillClass(pathFill))

  // - Font classes
  if (fontType)
    classes.push(
      getFontClass({
        type: fontType,
        size: fontSize,
      })
    )
  if (strong) classes.push(textStrongClass)
  if (transform) classes.push(getBaseClass(textTransformClass, transform))
  if (fontWeight) classes.push(getBaseClass(fontWeightClass, fontWeight))
  if (textAlign) classes.push(getTextAlignClass({ align: textAlign }))
  if (linkColor) classes.push(getBaseClass(linkClass, linkColor))
  if (linkHoverColor) classes.push(getBaseClass(linkHoverClass, linkHoverColor))

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

  if (padding) classes.push(getPaddingClass({}))

  if (paddingSide || paddingSize)
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

  if (spacing || spacingAfter || spacingSize || spacingUntil)
    classes.push(
      getSpacingClass({
        after: spacingAfter,
        size: spacingSize,
        until: spacingUntil,
      })
    )

  // - Flex
  if (flex) classes.push(getFlexClass())
  if (flexColumn) classes.push(flexColumnClass)
  if (flexEnd) classes.push(getFlexClass({ end: flexEnd }))
  if (flexNoWrap || flexWrap)
    classes.push(getFlexClass({ wrap: flexWrap, noWrap: flexNoWrap }))
  if (flexAlign) classes.push(getFlexClass({ align: flexAlign }))
  if (flexJustify) classes.push(getFlexClass({ justify: flexJustify }))

  // - Grid
  if (
    seven ||
    sevenInner ||
    shiftAt ||
    shiftSide ||
    gridWrap ||
    gridNoGutters ||
    blockRow
  ) {
    classes.push(
      ...getGridClass({
        blockRow,
        gridBreak,
        noGridClass,
        noWrapClass: noGridWrapClass,
        noGutters: gridNoGutters,
        seven,
        sevenInner,
        shiftAt,
        shiftSide,
        wrap: gridWrap,
      })
    )
  }

  // - Grid Item
  if (
    gridItem ||
    gridItemSize ||
    gridItemSizeAtS ||
    gridItemSizeAtM ||
    gridItemSizeAtL ||
    gridItemSizeAtXL
  ) {
    classes.push(
      ...getGridItemClass({
        size: gridItemSize,
        sizeAtS: gridItemSizeAtS,
        sizeAtM: gridItemSizeAtM,
        sizeAtL: gridItemSizeAtL,
        sizeAtXL: gridItemSizeAtXL,
        noItemClass: noGridItemClass,
      })
    )
  }

  // - Display

  // Remove from the flow but leave available to screen readers
  if (display) classes.push(getBaseClass(displayClass, display))
  if (position) classes.push(getBaseClass(positionClass, position))
  if (vishidden) classes.push(vishiddenClass)

  // - Theme classes
  if (themeBorder)
    classes.push(
      getThemeBorderClass({ color: themeBorder, side: themeBorderSide })
    )
  if (themeBackground)
    classes.push(getBaseClass(themeBackgroundClass, themeBackground))
  if (themeBackgroundTrans)
    classes.push(getBaseClass(themeBackgroundTransClass, themeBackgroundTrans))
  if (themeColor) classes.push(getBaseClass(themeColorClass, themeColor))
  if (themeLinkHover)
    classes.push(getBaseClass(themeLinkHoverClass, themeLinkHover))
  if (overlay) classes.push(getBaseClass(overlayClass, overlay))
  if (themePathFill)
    classes.push(getBaseClass(themePathFillClass, themePathFill))

  return {
    className: classes.length > 0 ? classes.join(' ') : undefined,
    style: allowSelect ? undefined : { userSelect: 'none' },
    ...otherProps,
  }
}

/**
 * The ubiquitous Element component
 *
 * @param {Object} props All Element's props
 */
export default function Element({ as, children, tag, forwardedRef, ...props }) {
  const { className, ...otherProps } = getClassNameAndOtherProps(props)

  return React.createElement(
    tag ? tag : as,
    {
      ref: forwardedRef,
      ...otherProps,
      className,
    },
    children
  )
}

export const gridItemSizePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

Element.propTypes = {
  allowSelect: PropTypes.bool,
  as: PropTypes.string,
  backgroundColor: PropTypes.oneOf(backgroundColors),
  blockRow: PropTypes.bool,
  border: PropTypes.bool,
  borderAt: PropTypes.oneOf(borderAtBreakpoints),
  borderColor: PropTypes.oneOf(borderColors),
  borderSide: PropTypes.oneOf(borderSides),
  canBe: PropTypes.oneOf(canBeColors),
  children: PropTypes.node,
  className: PropTypes.string,
  clearFix: PropTypes.bool,
  color: PropTypes.oneOf(textColors),
  display: PropTypes.oneOf(displayOptions),
  flex: PropTypes.bool,
  flexAlign: PropTypes.oneOf(flexAlignOptions),
  flexColumn: PropTypes.bool,
  flexJustify: PropTypes.oneOf(flexJustifyOptions),
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  fontWeight: PropTypes.oneOf(fontWeights),
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  gridBreak: PropTypes.oneOf(gridBreaks),
  gridNoGutters: PropTypes.bool,
  gridItem: PropTypes.bool,
  gridItemSize: gridItemSizePropType,
  gridItemSizeAtS: gridItemSizePropType,
  gridItemSizeAtM: gridItemSizePropType,
  gridItemSizeAtL: gridItemSizePropType,
  gridItemSizeAtXL: gridItemSizePropType,
  gridWrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(wrapSizes)]),
  noGridClass: PropTypes.bool,
  noGridItemClass: PropTypes.bool, // TODO: This is required as some items, like `.c-drawer__container` has a "grid-item"'s size class, but not `.l-grid-item`,
  noGridWrapClass: PropTypes.bool,
  linkColor: PropTypes.oneOf(linkColors),
  linkHoverColor: PropTypes.oneOf(linkHoverColors),
  overlay: PropTypes.oneOf(overlayColors),
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  paddingSide: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(spaceSides),
  ]),
  paddingSize: PropTypes.oneOf(spacingSizes),
  pathFill: PropTypes.oneOf(svgFillColors),
  position: PropTypes.oneOf(positionOptions),
  seven: PropTypes.bool,
  sevenInner: PropTypes.bool,
  shiftAt: PropTypes.oneOf(shiftBreakpoints),
  shiftSide: PropTypes.oneOf(shiftSides),
  space: PropTypes.bool,
  spaceAfter: PropTypes.oneOf(spaceAfterSizes),
  spaceSide: PropTypes.oneOf(spaceSides),
  spaceSize: PropTypes.oneOf(spacingSizes),
  spacing: PropTypes.bool,
  spacingAfter: PropTypes.oneOf(spacingAfterSizes),
  spacingSize: PropTypes.oneOf(spacingSizes),
  spacingUntil: PropTypes.oneOf(spacingUntilSizes),
  strong: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.oneOf(textAlignOptions),
  themeBackground: PropTypes.oneOf(themeBackgroundColors),
  themeBackgroundTrans: PropTypes.oneOf(themeBackgroundTransColors),
  themeBorder: PropTypes.oneOf(themeBorderColors),
  themeBorderSide: PropTypes.oneOf(sides),
  themeColor: PropTypes.oneOf(themeColors),
  themeLinkHover: PropTypes.oneOf(themeColors),
  themePathFill: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
  vishidden: PropTypes.bool,
}
Element.defaultProps = {
  allowSelect: true,
  as: 'div',
  noGridClass: false,
  noGridItemClass: false,
  noGridWrapClass: false,
}

// Some shortcut components for a more "semantic" structure

// - Headings and Paragraphs:

export function HeadingOne(props) {
  return <Element {...props} as="h1" />
}
HeadingOne.propTypes = Element.propTypes

export function HeadingTwo(props) {
  return <Element {...props} as="h2" />
}
HeadingTwo.propTypes = Element.propTypes

export function HeadingThree(props) {
  return <Element {...props} as="h3" />
}
HeadingThree.propTypes = Element.propTypes

export function HeadingFour(props) {
  return <Element {...props} as="h4" />
}
HeadingFour.propTypes = Element.propTypes

export function Paragraph(props) {
  return <Element {...props} as="p" />
}
Paragraph.propTypes = Element.propTypes

// - Lists

export function UL(props) {
  return <Element {...props} as="ul" />
}
UL.propTypes = Element.propTypes

export function LI(props) {
  return <Element {...props} as="li" />
}
LI.propTypes = Element.propTypes

// - Link
export const LinkBase = React.forwardRef(({ href, ...props }, ref) => (
  <Element {...props} as="a" href={href} forwardedRef={ref} />
))
LinkBase.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export function Link({ href, ...props }) {
  const LinkWrapper = useLinkContext()

  if (!href) return props.children

  return LinkWrapper ? (
    <LinkWrapper href={href} {...props}>
      <LinkBase {...props} />
    </LinkWrapper>
  ) : (
    <LinkBase {...props} href={href} />
  )
}
Link.propTypes = LinkBase.propTypes

// - Sections

export function Div(props) {
  return <Element {...props} as="div" />
}
Div.propTypes = Element.propTypes

export function Span(props) {
  return <Element {...props} as="span" />
}
Span.propTypes = Element.propTypes

export function Article(props) {
  return <Element {...props} as="article" />
}
Article.propTypes = Element.propTypes

export function Section(props) {
  return <Element {...props} as="section" />
}
Section.propTypes = Element.propTypes

export function Header(props) {
  return <Element {...props} as="header" />
}
Header.propTypes = Element.propTypes

export function Footer(props) {
  return <Element {...props} as="footer" />
}
Footer.propTypes = Element.propTypes

export function Nav(props) {
  return <Element {...props} as="nav" />
}
Nav.propTypes = Element.propTypes

// - Forms

export function Form(props) {
  return <Element {...props} as="form" />
}
Form.propTypes = Element.propTypes

// - Elements with Ref
// Use this component when a ref need to be passed to the element
export const ElementWithRef = React.forwardRef((props, ref) => (
  <Element {...props} forwardedRef={ref} />
))

// Div version
export const DivWithRef = React.forwardRef((props, ref) => (
  <Div {...props} forwardedRef={ref} />
))

// - Markers

export function Em(props) {
  return <Element {...props} as="em" />
}
Em.propTypes = Element.propTypes

export function Strong(props) {
  return <Element {...props} as="strong" />
}
Strong.propTypes = Element.propTypes
