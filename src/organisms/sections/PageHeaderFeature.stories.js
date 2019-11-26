import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select } from '@storybook/addon-knobs'

import PageHeaderFeature, {
  pageHeaderFeatureBlockTypes,
} from './PageHeaderFeature'

import dataFeature from './PageHeaderFeature.stories.json'
import dataColumns from './PageHeaderFeatureColumns.stories.json'
import dataFull from './PageHeaderFeatureFull.stories.json'
import dataLongform from './PageHeaderFeatureLongform.stories.json'

function getTabData(name, settings = {}) {
  const { blocksType, ...rest } = settings

  const data = {
    feature: dataFeature,
    column: dataColumns,
    full: dataFull,
    longform: dataLongform,
  }

  return {
    tab: name,
    ...PageHeaderFeature.defaultProps,
    ...data[blocksType],
    ...rest,
    blocksType,
  }
}

export function pageHeaderFeatureTab(settings = {}) {
  const type = select(
    'Blocks Type',
    pageHeaderFeatureBlockTypes,
    settings.blocksType,
    'Blocks'
  )

  const { blocks, blocksType, hasScroll, tab } = getTabData('Blocks', {
    blocksType: type,
    ...settings,
  })

  return {
    blocksType,
    blocks: object('Blocks', blocks, tab),
    hasScroll: boolean('Show Scroll to top', hasScroll, tab),
  }
}

storiesOf('organisms/sections/PageHeaderFeature', module)
  .addWithJSX('Default', () => {
    const { blocks, blocksType, hasScroll } = pageHeaderFeatureTab({
      blocksType: 'feature',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blocksType={blocksType}
        hasScroll={hasScroll}
      />
    )
  })

  .addWithJSX('3 Columns', () => {
    const { blocks, blocksType, hasScroll } = pageHeaderFeatureTab({
      blocksType: 'column',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blocksType={blocksType}
        hasScroll={hasScroll}
      />
    )
  })

  .addWithJSX('Full', () => {
    const { blocks, blocksType, hasScroll } = pageHeaderFeatureTab({
      blocksType: 'full',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blocksType={blocksType}
        hasScroll={hasScroll}
      />
    )
  })

  .addWithJSX('Longform', () => {
    const { blocks, blocksType, hasScroll } = pageHeaderFeatureTab({
      blocksType: 'longform',
      tab: 'Props',
    })

    return (
      <PageHeaderFeature
        blocks={blocks}
        blocksType={blocksType}
        hasScroll={hasScroll}
      />
    )
  })
