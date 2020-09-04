import React from 'react'

import {
  borderColors,
  borderAtBreakpoints,
  borderSides,
} from '../atoms/global/borders'

import {
  backgroundColors,
  canBeColors,
  linkColors,
  linkHoverColors,
  overlayColors,
  svgFillColors,
  textColors,
  themeBackgroundColors,
  themeBackgroundTransColors,
  themeBorderColors,
  themeBorderSides,
  themeColors,
} from '../atoms/global/colors'

import { displayOptions, positionOptions } from '../atoms/global/commons'

import { flexAlignOptions, flexJustifyOptions } from '../atoms/global/flex'

import {
  fontSizes,
  fontTypes,
  textAlignOptions,
  textTransforms,
  fontWeights,
} from '../atoms/global/fonts'

import {
  shiftBreakpoints,
  shiftSides,
  wrapSizes,
  gridBreaks,
} from '../atoms/global/grids'

import {
  spaceAfterSizes,
  spacingSizes,
  spacingAfterSizes,
  spacingUntilSizes,
} from '../atoms/global/spacing'

import tagsOptions from '../atoms/global/tags'

import Element, {
  Article,
  Div,
  Footer,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  Header,
  LI,
  Link,
  Nav,
  Paragraph,
  Section,
  Span,
  UL,
  OL,
} from './Element'

export default {
  title: 'ALPS/Helpers/Element/Element',
  component: Element,
  args: {
    children: 'Sed sagittis massa id blandit aliquet',
  },
  argTypes: {
    allowSelect: { control: { type: 'boolean' } },
    as: { control: { type: 'select', options: tagsOptions } },
    backgroundColor: { control: { type: 'select', options: backgroundColors } },
    blockRow: { control: { type: 'boolean' } },
    border: { control: { type: 'boolean' } },
    borderAt: { control: { type: 'select', options: borderAtBreakpoints } },
    borderColor: { control: { type: 'select', options: borderColors } },
    borderSide: { control: { type: 'select', options: borderSides } },
    canBe: { control: { type: 'select', options: canBeColors } },
    className: { control: { type: 'text' } },
    clearFix: { control: { type: 'boolean' } },
    color: { control: { type: 'select', options: textColors } },
    display: { control: { type: 'select', options: displayOptions } },
    flex: { control: { type: 'boolean' } },
    flexColumn: { control: { type: 'boolean' } },
    flexAlign: { control: { type: 'select', options: flexAlignOptions } },
    flexJustify: { control: { type: 'select', options: flexJustifyOptions } },
    fontSize: { control: { type: 'select', options: fontSizes } },
    fontType: { control: { type: 'select', options: fontTypes } },
    fontWeight: { control: { type: 'select', options: fontWeights } },
    gridBreak: { control: { type: 'select', options: gridBreaks } },
    gridItem: { control: { type: 'boolean' } },
    gridItemSize: { control: { type: 'select', options: wrapSizes } },
    gridItemSizeAtS: { control: { type: 'select', options: wrapSizes } },
    gridItemSizeAtM: { control: { type: 'select', options: wrapSizes } },
    gridItemSizeAtL: { control: { type: 'select', options: wrapSizes } },
    gridItemSizeAtXL: { control: { type: 'select', options: wrapSizes } },
    gridWrap: {
      control: { type: 'select', options: [false, true, ...wrapSizes] },
    },
    gridNoGutters: { control: { type: 'boolean' } },
    noGridClass: { control: { type: 'boolean' } },
    noGridItemClass: { control: { type: 'boolean' } },
    noGridWrapClass: { control: { type: 'boolean' } },
    linkColor: { control: { type: 'select', options: linkColors } },
    linkHoverColor: { control: { type: 'select', options: linkHoverColors } },
    overlay: { control: { type: 'select', options: overlayColors } },
    pathFill: { control: { type: 'select', options: svgFillColors } },
    padding: { control: { type: 'select', options: spacingSizes } },
    paddingBottom: { control: { type: 'select', options: spacingSizes } },
    paddingLeft: { control: { type: 'select', options: spacingSizes } },
    paddingLeftUntil: {
      control: { type: 'select', options: spacingUntilSizes },
    },
    paddingRight: { control: { type: 'select', options: spacingSizes } },
    paddingSides: { control: { type: 'select', options: spacingSizes } },
    paddingTop: { control: { type: 'select', options: spacingSizes } },
    position: { control: { type: 'select', options: positionOptions } },
    seven: { control: { type: 'boolean' } },
    sevenInner: { control: { type: 'boolean' } },
    shiftAt: { control: { type: 'select', options: shiftBreakpoints } },
    shiftSide: { control: { type: 'select', options: shiftSides } },
    space: { control: { type: 'select', options: spacingSizes } },
    spaceAfter: { control: { type: 'select', options: spaceAfterSizes } },
    spaceBottom: { control: { type: 'select', options: spacingSizes } },
    spaceLeft: { control: { type: 'select', options: spacingSizes } },
    spaceLeftUntil: {
      control: { type: 'select', options: spacingUntilSizes },
    },
    spaceRight: { control: { type: 'select', options: spacingSizes } },
    spaceTop: { control: { type: 'select', options: spacingSizes } },
    spacing: { control: { type: 'select', options: spacingSizes } },
    spacingAfter: { control: { type: 'select', options: spacingAfterSizes } },
    // spacingBottom: { control: { type: 'select', options: spacingSizes } },
    spacingLeft: { control: { type: 'select', options: spacingSizes } },
    // spacingRight: { control: { type: 'select', options: spacingSizes } },
    // spacingTop: { control: { type: 'select', options: spacingSizes } },
    spacingUntil: {
      control: { type: 'select', options: spacingUntilSizes },
    },
    spacingDoubleUntil: {
      control: { type: 'select', options: spacingUntilSizes },
    },
    strong: { control: { type: 'boolean' } },
    themeBackground: {
      control: { type: 'select', options: themeBackgroundColors },
    },
    themeBackgroundTrans: {
      control: { type: 'select', options: themeBackgroundTransColors },
    },
    themeBorder: { control: { type: 'select', options: themeBorderColors } },
    themeBorderSide: { control: { type: 'select', options: themeBorderSides } },
    themeColor: { control: { type: 'select', options: themeColors } },
    themeLinkHover: { control: { type: 'select', options: themeColors } },
    themePathFill: { control: { type: 'select', options: svgFillColors } },
    tag: { control: { type: 'select', options: tagsOptions } },
    textAlign: { control: { type: 'select', options: textAlignOptions } },
    transform: { control: { type: 'select', options: textTransforms } },
    vishidden: { control: { type: 'boolean' } },
  },
}

const ElementTemplate = props => <Element {...props} />

export const Default = ElementTemplate.bind({})

export const _Article = Article.bind({})

export const _Section = Section.bind({})

export const _Div = Div.bind({})

export const _Span = Span.bind({})

export const _Header = Header.bind({})

export const _Footer = Footer.bind({})

export const _HeadingOne = HeadingOne.bind({})

export const _HeadingTwo = HeadingTwo.bind({})

export const _HeadingThree = HeadingThree.bind({})

export const _HeadingFour = HeadingFour.bind({})

export const _Paragraph = Paragraph.bind({})

const OLTemplate = () => {
  return (
    <OL>
      <LI>Item 1</LI>
      <LI>Item 2</LI>
      <LI>Item 3</LI>
    </OL>
  )
}
export const _OL = OLTemplate.bind({})

const ULTemplate = () => {
  return (
    <UL>
      <LI>Item 1</LI>
      <LI>Item 2</LI>
      <LI>Item 3</LI>
    </UL>
  )
}
export const _UL = ULTemplate.bind({})

export const _LI = LI.bind({})

export const _Nav = Nav.bind({})

export const _Link = Link.bind({})
_Link.args = {
  href: 'https://alps-react.adventist.io',
}
