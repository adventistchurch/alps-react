import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import { useGlobalTab } from './TemplateWrap.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import { useSearchHeaderTab } from '../molecules/forms/SearchHeader.stories.js'
import data from './Search.stories.json'

import Search from './Search'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Search.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderTab }

export function resultsTab(settings = {}) {
  const { results, tab } = getTabData('Results', settings)

  return {
    results: object('Items', results, tab),
  }
}

export function useSearchTabs(settings = {}) {
  const { pageHeader } = getTabData(null, settings)
  const searchHeader = useSearchHeaderTab(settings)

  return {
    pageHeader: pageHeaderTab(pageHeader),
    searchHeader: searchHeader,
    ...resultsTab(settings),
    ...useGlobalTab(settings),
  }
}

storiesOf('templates/Search', module)
  .addWithJSX('Default', () => {
    const props = useSearchTabs()

    return <Search {...props} />
  })
  .addWithJSX('with suggestions', () => {
    const props = useSearchTabs({ withSuggestions: true, defaultTerm: 'Hi' })

    return <Search {...props} />
  })
