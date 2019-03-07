import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  select,
  text,
  withKnobs,
  number,
} from '@storybook/addon-knobs'

import Element, {
  Div,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  Link,
  Paragraph,
} from './Element'

import Icon, { iconNames } from '../atoms/icons/Icon'

import {
  borderColors,
  borderAtBreakpoints,
  borderSides,
} from '../atoms/global/borders'

import {
  backgroundColors,
  canBeColors,
  linkHoverColors,
  overlayColors,
  svgFillColors,
  textColors,
  themeBackgroundColors,
  themeBackgroundTransColors,
  themeBorderColors,
  themeColors,
  linkColors,
} from '../atoms/global/colors'

import { displayOptions, sides } from '../atoms/global/commons'

import { flexAlignOptions, flexJustifyOptions } from '../atoms/global/flex'

import {
  fontSizes,
  fontTypes,
  textAlignOptions,
  textTransforms,
} from '../atoms/global/fonts'

import { shiftBreakpoints, shiftSides, wrapSizes } from '../atoms/global/grids'

import {
  afterSizes,
  spaceSides,
  spacingSizes,
  untilSizes,
} from '../atoms/global/spacing'

import tagsOptions from '../atoms/global/tags'

function setOptions(options, labelFormat) {
  const newOptions = {}

  for (const option of options) {
    newOptions[labelFormat ? labelFormat(option) : option] = option
  }

  return { '-': null, ...newOptions }
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Element.defaultProps,
    ...settings,
  }
}

function borderTab(settings = {}) {
  const {
    border,
    borderAt,
    borderColor,
    borderSide,
    themeBorder,
    themeBorderSide,
    tab,
  } = getTabData('Border', settings)

  return {
    border: boolean('Has Border', border, tab),
    borderColor: select(
      'Border Color',
      setOptions(borderColors),
      borderColor,
      tab
    ),
    borderSide: select('Border Side', setOptions(borderSides), borderSide, tab),
    themeBorder: select(
      'Theme Border Color',
      setOptions(themeBorderColors),
      themeBorder,
      tab
    ),
    themeBorderSide: select(
      'Theme Border Side',
      setOptions(sides),
      themeBorderSide,
      tab
    ),
    borderAt: select(
      'At Breakpoint',
      setOptions(borderAtBreakpoints),
      borderAt,
      tab
    ),
  }
}

function colorTab(settings = {}) {
  const {
    backgroundColor,
    canBe,
    color,
    linkColor,
    linkHover,
    overlay,
    pathFill,
    themeBackground,
    themeBackgroundTrans,
    themeColor,
    themeLinkHover,
    themePathFill,
    tab,
  } = getTabData('Color', settings)

  return {
    color: select('Color', setOptions(textColors), color, tab),

    linkColor: select('Link Color', setOptions(linkColors), linkColor, tab),
    linkHoverColor: select(
      'Link Hover Color',
      setOptions(linkHoverColors),
      linkHover,
      tab
    ),
    backgroundColor: select(
      'Background Color',
      setOptions(backgroundColors),
      backgroundColor,
      tab
    ),

    canBe: select('Can be', setOptions(canBeColors), canBe, tab),
    overlay: select('Overlay', setOptions(overlayColors), overlay, tab),

    themeColor: select(
      'Theme Color ',
      setOptions(themeColors),
      themeColor,
      tab
    ),
    themeLinkHover: select(
      'Theme Link Hover ',
      setOptions(themeColors),
      themeLinkHover,
      tab
    ),
    themeBackground: select(
      'Theme Background Color ',
      setOptions(themeBackgroundColors),
      themeBackground,
      tab
    ),
    themeBackgroundTrans: select(
      'Theme Background Transparent Color ',
      setOptions(themeBackgroundTransColors),
      themeBackgroundTrans,
      tab
    ),

    pathFill: select(
      'SVG Path Fill Color ',
      setOptions(svgFillColors),
      pathFill,
      tab
    ),
    themePathFill: select(
      'Theme SVG Path Fill Color ',
      setOptions(themeColors),
      themePathFill,
      tab
    ),
  }
}

function fontTab(settings = {}) {
  const { fontSize, fontType, strong, textAlign, transform, tab } = getTabData(
    'Font/Text',
    settings
  )

  return {
    fontType: select('Font Type', setOptions(fontTypes), fontType, tab),
    fontSize: select('Font Size', setOptions(fontSizes), fontSize, tab),
    strong: boolean('Strong', strong, tab),
    transform: select(
      'Text Transform',
      setOptions(textTransforms),
      transform,
      tab
    ),
    textAlign: select(
      'Text Align',
      setOptions(textAlignOptions),
      textAlign,
      tab
    ),
  }
}

function paddingAndSpacingTab(settings = {}) {
  const {
    padding,
    paddingSide,
    paddingSize,
    space,
    spaceSide,
    spaceSize,
    spacing,
    spacingAfter,
    spacingSize,
    spacingUntil,
    tab,
  } = getTabData('Spacing', settings)

  return {
    padding: boolean('Has padding', padding, tab),
    paddingSide: select(
      'Padding Side',
      setOptions(spaceSides),
      paddingSide,
      tab
    ),
    paddingSize: select(
      'Padding Size',
      setOptions(spacingSizes),
      paddingSize,
      tab
    ),

    space: boolean('Has space', space, tab),
    spaceSize: select('Space Size', setOptions(spacingSizes), spaceSize, tab),
    spaceSide: select('Space Side', setOptions(spaceSides), spaceSide, tab),

    spacing: boolean('Has spacing', spacing, tab),
    spacingSize: select(
      'Spacing Size',
      setOptions(spacingSizes),
      spacingSize,
      tab
    ),
    spacingAfter: select(
      'Spacing After',
      setOptions(afterSizes),
      spacingAfter,
      tab
    ),
    spacingUntil: select(
      'Spacing Until',
      setOptions(untilSizes),
      spacingUntil,
      tab
    ),
  }
}

function displayAndFlexTab(settings = {}) {
  const {
    as,
    display,
    clearFix,
    flex,
    flexAlign,
    flexColumn,
    flexJustify,
    vishidden,
    tab,
  } = getTabData('Display', settings)

  return {
    as: as ? select('As (HTML Tag)', setOptions(tagsOptions), as, tab) : null,
    display: select('Display', setOptions(displayOptions), display, tab),
    clearFix: boolean('Clear Fix', clearFix, tab),
    vishidden: boolean('Is "vishidden"', vishidden, tab),
    flex: boolean('Is Flex', flex, tab),
    flexAlign: select(
      'Flex Align',
      setOptions(flexAlignOptions),
      flexAlign,
      tab
    ),
    flexJustify: select(
      'Flex Justify',
      setOptions(flexJustifyOptions),
      flexJustify,
      tab
    ),
    flexColumn: boolean('Flex Column', flexColumn, tab),
  }
}
function gridTab(settings = {}) {
  const {
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
    seven,
    sevenInner,
    shiftAt,
    shiftSide,
    tab,
  } = getTabData('Grid', settings)

  const wrapLabelFormat = value => `${value} of 7`

  return {
    seven: boolean('Seven Grid', seven, tab),
    sevenInner: boolean('Seven Inner', sevenInner, tab),
    gridNoGutters: boolean('No Gutters', gridNoGutters, tab),
    noGridClass: boolean('No Grid class', noGridClass, tab),
    noGridWrapClass: boolean('No Grid Wrap class', noGridWrapClass, tab),
    gridWrap: select(
      'Grid Wrap',
      setOptions(wrapSizes, wrapLabelFormat),
      gridWrap,
      tab
    ),
    gridItem: boolean('Is Item', gridItem, tab),
    noGridItemClass: boolean('Has Grid Item class', noGridItemClass, tab),
    gridItemSize: number('Item Size', gridItemSize, {}, tab),
    gridItemSizeAtS: number('Item Size At Small', gridItemSizeAtS, {}, tab),
    gridItemSizeAtM: number('Item Size At Medium', gridItemSizeAtM, {}, tab),
    gridItemSizeAtL: number('Item Size At Large', gridItemSizeAtL, {}, tab),
    gridItemSizeAtXL: number(
      'Item Size At Extra Large',
      gridItemSizeAtXL,
      {},
      tab
    ),
    shiftAt: select(
      'Shift at Breakpoint',
      setOptions(shiftBreakpoints),
      shiftAt,
      tab
    ),
    shiftSide: select('Shift Side', setOptions(shiftSides), shiftSide, tab),
  }
}

export function elementTab(props) {
  return {
    ...fontTab(props),
    ...colorTab(props),
    ...borderTab(props),
    ...paddingAndSpacingTab(props),
    ...displayAndFlexTab(props),
    ...gridTab(props),
  }
}

storiesOf('helpers/Element', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab()

    return <Element {...props}>{content}</Element>
  })

  .addWithJSX('Div (div)', () => {
    const title = text('Title', 'Lorem ipsum dolor sit amet', 'Content')
    const paragraph = text(
      'Paragraph',
      'Incidunt asperiores pariatur voluptate optio et assumenda nulla. Reprehenderit quisquam doloremque voluptas. Est aut quia suscipit aut qui facilis saepe minima. Aspernatur eos odio fugiat officiis et natus necessitatibus debitis.',
      'Content'
    )
    const props = elementTab({ as: null })

    return (
      <Div {...props}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </Div>
    )
  })

  .addWithJSX('With Icon (SVG fill)', () => {
    const iconName = select('Icon', iconNames, 'logo', 'Content')
    const props = elementTab()

    return (
      <Element {...props}>
        <Icon name={iconName} />
      </Element>
    )
  })

  .addWithJSX('HeadingOne (h1)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingOne {...props}>{content}</HeadingOne>
  })

  .addWithJSX('HeadingTwo (h2)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingTwo {...props}>{content}</HeadingTwo>
  })

  .addWithJSX('HeadingThree (h3)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingThree {...props}>{content}</HeadingThree>
  })

  .addWithJSX('HeadingFour (h4)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingFour {...props}>{content}</HeadingFour>
  })

  .addWithJSX('Paragraph (p)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis. Distinctio eligendi assumenda esse recusandae fuga. Repellendus et sunt id et consectetur nisi et in aliquam. Nostrum sunt aut doloribus necessitatibus tenetur dignissimos ut nihil pariatur.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <Paragraph {...props}>{content}</Paragraph>
  })

  .addWithJSX('Link (a)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const href = text('Link (href)', '#link', 'Content')
    const props = elementTab({ as: false })

    return (
      <Link href={href} {...props}>
        {content}
      </Link>
    )
  })
