import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, boolean } from '@storybook/addon-knobs'

import SearchHeader from './SearchHeader'

import data from './SearchHeader.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...SearchHeader.defaultProps,
    ...data,
    ...settings,
  }
}

export function searchHeaderTab(settings = {}) {
  const {
    placeholder,
    title,
    submitLabel,
    filters,
    suggestions,
    searchAgainLabel,
    tab,
    withFilters = false,
    withSuggestions = false,
  } = getTabData('Search Header', settings)

  const showFilters = boolean('Show filters', withFilters, tab)

  return {
    placeholder: text('Placeholder', placeholder, tab),
    title: text('Form Title (screen readers only)', title, tab),
    searchLabel: text('Search Button (screen readers only)', submitLabel, tab),
    filters: showFilters ? object('Filters', filters, tab) : null,
    suggestions: withSuggestions
      ? object('Suggestions', suggestions, tab)
      : null,
    searchAgainLabel: showFilters
      ? text('Search Again (screen readers only)', searchAgainLabel, tab)
      : null,
  }
}

storiesOf('molecules/forms/SearchHeader', module).addWithJSX('Default', () => {
  const props = searchHeaderTab()

  return <SearchHeader {...props} />
})

storiesOf('molecules/forms/SearchHeader', module).addWithJSX(
  'with suggestions',
  () => {
    const { suggestions, ...props } = searchHeaderTab({ withSuggestions: true })

    const [term, setTerm] = useState()

    const onSearch = e => setTerm(e.target.value)

    return (
      <SearchHeader
        {...props}
        onSearch={onSearch}
        value={term}
        suggestions={term ? suggestions : null}
      />
    )
  }
)

storiesOf('molecules/forms/SearchHeader', module).addWithJSX(
  'with filters',
  () => {
    const props = searchHeaderTab({ withFilters: true })

    return <SearchHeader {...props} />
  }
)
