import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import ArchivePage from './ArchivePage'

// Stories and data
import { useGlobalTab } from './TemplateWrap.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { paginationTab } from '../molecules/navigation/Pagination.stories.js'
import { facetsTab } from '../molecules/forms/FacetFilter.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import data from './ArchivePage.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...ArchivePage.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderTab }

export function articlesTab(settings = {}) {
  const { articles, articlesTitle, tab } = getTabData('Articles', settings)

  return {
    articlesTitle: text('Title', articlesTitle, tab),
    articles: object('Items', articles, tab),
  }
}

export function useNewsArchiveTabs(settings = {}) {
  const { pageHeader, aside, pagination } = getTabData(null, settings)

  const asideChildren = aside
    ? asideTab({ noMediaBlocks: true, ...aside })
    : null

  return {
    pageHeader: pageHeaderTab(pageHeader),
    aside: asideChildren,
    filters: facetsTab(settings),
    pagination: paginationTab(pagination),
    ...articlesTab(settings),
    ...useGlobalTab(settings),
  }
}

storiesOf('templates/ArchivePage', module).addWithJSX('Default', () => {
  const props = useNewsArchiveTabs()

  return <ArchivePage {...props} />
})
