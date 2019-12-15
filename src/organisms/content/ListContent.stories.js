import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import ContentBlock from '../../molecules/blocks/ContentBlock'
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

export function listContentTab(settings = {}) {
  const { items, tab } = getTabData('Pagination', settings)
  const paginationProps = settings.showPagination
    ? paginationTab(settings.pagination)
    : null

  return {
    children: renderItems(object('Items *', items, tab), ContentBlock),
    pagination: paginationProps,
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
