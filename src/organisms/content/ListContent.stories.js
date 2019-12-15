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
export function contentTab(settings = {}) {
  const { items, tab } = getTabData('Results', settings)

  return {
    children: object('Results *', items, tab),
  }
}

export function listContentTab(settings = {}) {
  const contentProps = contentTab(settings)
  const paginationProps = paginationTab(data.pagination)

  return {
    pagination: paginationProps,
    ...contentProps,
  }
}

storiesOf('organisms/content/ListContent', module).addWithJSX('Default', () => {
  const { children, pagination } = listContentTab()

  return (
    <ListContent pagination={pagination}>
      {renderItems(children, ContentBlock)}
    </ListContent>
  )
})
