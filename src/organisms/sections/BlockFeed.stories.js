import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select } from '@storybook/addon-knobs'

import BlockFeed from './BlockFeed'

import { mediaBlocksTypes } from '../../molecules/blocks/MediaBlock'
import data from './BlockFeed.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...BlockFeed.defaultProps,
    ...data,
    ...settings,
  }
}

export function blocksFeedTab(settings = {}) {
  const { blocks, blocksType, grid, tab } = getTabData('Blocks', settings)

  return {
    blocksType: select('Blocks Type', mediaBlocksTypes, blocksType, 'Blocks'),
    grid: boolean('Show as grid', grid, tab),
    blocks: object('Blocks', blocks, tab),
  }
}

storiesOf('organisms/sections/BlockFeed', module).addWithJSX('Default', () => {
  const { blocks, blocksType, grid } = blocksFeedTab()

  return <BlockFeed blocks={blocks} blocksType={blocksType} grid={grid} />
})
