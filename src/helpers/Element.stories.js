import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, number } from '@storybook/addon-knobs'

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
} from './Element'

import { iconNames } from '../atoms/icons/Icon'
import IconWrap, { iconSizes } from '../atoms/icons/IconWrap'

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
  fontWeights,
} from '../atoms/global/fonts'

import { shiftBreakpoints, shiftSides, wrapSizes } from '../atoms/global/grids'

import {
  spaceAfterSizes,
  spaceSides,
  spacingSizes,
  spacingAfterSizes,
  spacingUntilSizes,
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
  const {
    fontSize,
    fontType,
    fontWeight,
    strong,
    textAlign,
    transform,
    tab,
  } = getTabData('Font/Text', settings)

  return {
    fontType: select('Font Type', setOptions(fontTypes), fontType, tab),
    fontSize: select('Font Size', setOptions(fontSizes), fontSize, tab),
    fontWeight: select('Font Weight', setOptions(fontWeights), fontWeight, tab),
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
    spaceAfter,
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
    spaceAfter: select(
      'Space After',
      setOptions(spaceAfterSizes),
      spaceAfter,
      tab
    ),

    spacing: boolean('Has spacing', spacing, tab),
    spacingSize: select(
      'Spacing Size',
      setOptions(spacingSizes),
      spacingSize,
      tab
    ),
    spacingAfter: select(
      'Spacing After',
      setOptions(spacingAfterSizes),
      spacingAfter,
      tab
    ),
    spacingUntil: select(
      'Spacing Until',
      setOptions(spacingUntilSizes),
      spacingUntil,
      tab
    ),
  }
}

function displayAndFlexTab(settings = {}) {
  const {
    allowSelect,
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
    allowSelect: boolean('Allow text select', allowSelect, tab),
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
  .addWithJSX('Default', () => {
    const title = text('Title', 'Lorem ipsum dolor sit amet', 'Content')
    const paragraph = text(
      'Paragraph',
      'Incidunt asperiores pariatur voluptate optio et assumenda nulla. Reprehenderit quisquam doloremque voluptas. Est aut quia suscipit aut qui facilis saepe minima. Aspernatur eos odio fugiat officiis et natus necessitatibus debitis.',
      'Content'
    )
    const props = elementTab()

    return (
      <Element {...props}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </Element>
    )
  })

  .addWithJSX('SVG fill Icon', () => {
    const iconName = select('Icon', iconNames, 'logo', 'Icon')
    const iconSize = select('Icon size', iconSizes, 'xl', 'Icon')
    const pathFill = select(
      'SVG Path Fill ',
      setOptions(svgFillColors),
      'gray',
      'Icon'
    )
    const themePathFill = select(
      'Theme SVG Path Fill ',
      setOptions(themeColors),
      null,
      'Icon'
    )

    return (
      <Element pathFill={pathFill} themePathFill={themePathFill} padding>
        <IconWrap name={iconName} size={iconSize} />

        <Paragraph fontType="secondary">
          Element props <code>pathFill</code> and <code>themePathFill</code> do
          affect nested SVG paths fill color.
        </Paragraph>
        <Paragraph fontType="secondary">
          Try this by changing <strong>Theme SVG Path Fill</strong> or{' '}
          <strong>SVG Path Fill</strong> knobs.
        </Paragraph>
      </Element>
    )
  })

storiesOf("helpers/Element's Shorcuts", module)
  .addWithJSX('Article (<article>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Article {...props}>{content}</Article>
  })

  .addWithJSX('Div (div)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: null })

    return <Div {...props}>{content}</Div>
  })

  .addWithJSX('Heading (<heading>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Header {...props}>{content}</Header>
  })

  .addWithJSX('Footer (<footer>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Footer {...props}>{content}</Footer>
  })

  .addWithJSX('HeadingOne (<h1>)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingOne {...props}>{content}</HeadingOne>
  })

  .addWithJSX('HeadingTwo (<h2>)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingTwo {...props}>{content}</HeadingTwo>
  })

  .addWithJSX('HeadingThree (<h3>)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingThree {...props}>{content}</HeadingThree>
  })

  .addWithJSX('HeadingFour (<h4>) ', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <HeadingFour {...props}>{content}</HeadingFour>
  })

  .addWithJSX('Link (<a>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const href = text('Link (href)', '#link', 'Content')
    const props = elementTab({ as: false })

    return (
      <Link href={href} {...props}>
        {content}
      </Link>
    )
  })

  .addWithJSX('Nav (<nav>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Nav {...props}>{content}</Nav>
  })

  .addWithJSX('Paragraph (<p>)', () => {
    const content = text(
      'Content',
      'Ut numquam culpa deserunt cum qui suscipit saepe blanditiis. Distinctio eligendi assumenda esse recusandae fuga. Repellendus et sunt id et consectetur nisi et in aliquam. Nostrum sunt aut doloribus necessitatibus tenetur dignissimos ut nihil pariatur.',
      'Content'
    )
    const props = elementTab({ as: false })

    return <Paragraph {...props}>{content}</Paragraph>
  })

  .addWithJSX('Section (<section>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Section {...props}>{content}</Section>
  })

  .addWithJSX('Span (<span>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return <Span {...props}>{content}</Span>
  })

  .addWithJSX('UL>LI (<ul>,<li>)', () => {
    const content = text('Content', 'Lorem ipsum', 'Content')
    const props = elementTab({ as: false })

    return (
      <UL {...props}>
        <LI>{content}</LI>
        <LI>{content}</LI>
        <LI>{content}</LI>
      </UL>
    )
  })
