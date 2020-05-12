import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import NewsArchive from './NewsArchive'

// Stories and data
import { globalTab } from './TemplateWrap.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { paginationTab } from '../molecules/navigation/Pagination.stories.js'
import { facetsTab } from '../molecules/forms/FacetFilter.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import data from './NewsArchive.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...NewsArchive.defaultProps,
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

export function newsArchiveTabs(settings = {}) {
  const { pageHeader, aside, pagination } = getTabData(null, settings)

  return {
    pageHeader: pageHeaderTab(pageHeader),
    aside: aside ? asideTab({ aside, hideSecondary: true }) : null,
    filters: facetsTab(settings),
    pagination: paginationTab(pagination),
    ...articlesTab(settings),
    ...globalTab(settings),
  }
}

storiesOf('templates/NewsArchive', module).addWithJSX('Default', () => {
  const props = newsArchiveTabs()

  return <NewsArchive {...props} />
})
