import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select } from '@storybook/addon-knobs'

import PageHeaderFeature, { blockTypes } from './PageHeaderFeature'

import dataFeature from './PageHeaderFeature.stories.json'
import dataColumns from './PageHeaderFeatureColumns.stories.json'
import dataFull from './PageHeaderFeatureFull.stories.json'
import dataLongform from './PageHeaderFeatureLongform.stories.json'

function getTabData(name, settings = {}) {
  const { blockType, ...rest } = settings

  const data = {
    feature: dataFeature,
    featureHalf: dataFeature,
    featureWide: dataFeature,
    column: dataColumns,
    full: dataFull,
    longform: dataLongform,
  }

  return {
    tab: name,
    ...PageHeaderFeature.defaultProps,
    ...data[blockType],
    ...rest,
    blockType,
  }
}

export function pageHeaderFeatureTab(settings = {}) {
  const { blocks, blockType, hasScroll, tab, ...rest } = getTabData('Blocks', {
    ...settings,
  })

  return {
    blockType: select('Blocks Type', blockTypes, blockType, 'Blocks'),
    blocks: object('Blocks', blocks, tab),
    hasScroll: boolean('Show Scroll to top', hasScroll, tab),
    ...rest,
  }
}

storiesOf('organisms/sections/PageHeaderFeature', module)
  .addWithJSX('Feature (Default)', () => {
    const { blocks, blockType, hasScroll, ...rest } = pageHeaderFeatureTab({
      blockType: 'feature',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blockType={blockType}
        hasScroll={hasScroll}
        {...rest}
      />
    )
  })

  .addWithJSX('3 Columns', () => {
    const { blocks, blockType, hasScroll } = pageHeaderFeatureTab({
      blockType: 'column',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blockType={blockType}
        hasScroll={hasScroll}
      />
    )
  })

  .addWithJSX('Full', () => {
    const { blocks, blockType, hasScroll } = pageHeaderFeatureTab({
      blockType: 'full',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blockType={blockType}
        hasScroll={hasScroll}
      />
    )
  })

  .addWithJSX('Longform', () => {
    const { blocks, blockType, hasScroll } = pageHeaderFeatureTab({
      blockType: 'longform',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blockType={blockType}
        hasScroll={hasScroll}
      />
    )
  })
