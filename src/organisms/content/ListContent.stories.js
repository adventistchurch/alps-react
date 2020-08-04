import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import MediaBlock from '../../molecules/blocks/MediaBlock'
import renderItems from '../../helpers/renderItems'
import { paginationTab } from '../../molecules/navigation/Pagination.stories.js'

import data from './ListContent.stories.json'

import ListContent from './ListContent'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...ListContent.defaultProps,
    ...data,
    ...settings,
  }
}
export function headingTab(settings = {}) {
  const { linkLabel, linkUrl, title, tab } = getTabData('Heading', settings)

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link label', linkLabel, tab),
    linkUrl: text('Link URL', linkUrl, tab),
  }
}

export function itemsTab(settings = {}) {
  const { items, tab } = getTabData('Items', settings)
  const paginationProps = settings.showPagination
    ? paginationTab(settings.pagination)
    : null

  return {
    children: renderItems(object('Items *', items, tab), MediaBlock, {
      stackedUntilSmall: true,
      asBackgroundImage: false,
      seven: true,
      blockProps: {
        gridBreak: 'large',
        gridWrap: true,
        seven: true,
        spacingUntil: 'small',
      },
      imageProps: {
        gridItemSizeAtS: 2,
        gridItemSizeAtL: 1,
        paddingSides: 'zero',
      },
      contentProps: {
        gridItemSizeAtS: 4,
        gridItemSizeAtL: 3,
        paddingLeft: true,
        flexJustify: 'start',
      },
    }),
    pagination: paginationProps,
  }
}

export function listContentTab(settings = {}) {
  return {
    ...headingTab(settings),
    ...itemsTab(settings),
  }
}

storiesOf('organisms/content/ListContent', module)
  .addWithJSX('Default', () => {
    const props = listContentTab()
    return <ListContent {...props} />
  })

  .addWithJSX('With Pagination', () => {
    const props = listContentTab({ showPagination: true })
    return <ListContent {...props} />
  })
