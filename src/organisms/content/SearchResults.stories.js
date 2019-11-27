import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text } from '@storybook/addon-knobs'

import SearchResults from './SearchResults'

import data from './SearchResults.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...SearchResults.defaultProps,
    ...data,
    ...settings,
  }
}

export function resultsTab(settings = {}) {
  const { results, tab } = getTabData('Results', settings)

  return {
    results: object('Results *', results, tab),
  }
}

function loadMoreTab(settings = {}) {
  const { loadMoreLabel, loadMoreUrl, showLoadMore, tab } = getTabData(
    'Load More button',
    {
      settings,
    }
  )

  const loadMore = boolean('Show Load More', showLoadMore, tab)

  return {
    showLoadMore: loadMore,
    loadMoreLabel: loadMore
      ? text('Load More Label', loadMoreLabel, tab)
      : null,
    loadMoreUrl: loadMore ? text('Load More Url', loadMoreUrl, tab) : null,
  }
}

export function searchResultsTab(settings = {}) {
  const props = getTabData('Search Results', settings)

  return {
    ...resultsTab(props),
    ...loadMoreTab(props),
  }
}

storiesOf('organisms/content/SearchResults', module).addWithJSX(
  'Default',
  () => {
    const { results } = resultsTab()
    const { loadMoreLabel, loadMoreUrl, showLoadMore } = loadMoreTab()

    return (
      <SearchResults
        results={results}
        showLoadMore={showLoadMore}
        loadMoreLabel={loadMoreLabel}
        loadMoreUrl={loadMoreUrl}
      />
    )
  }
)
