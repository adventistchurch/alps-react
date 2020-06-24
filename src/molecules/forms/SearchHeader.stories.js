import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, boolean } from '@storybook/addon-knobs'

import SearchHeader from './SearchHeader'

import data from './SearchHeader.stories.json'

function useTabData(name, settings = {}) {
  return {
    tab: name,
    ...SearchHeader.defaultProps,
    ...data,
    ...settings,
  }
}

export function useSearchHeaderTab(settings = {}) {
  const {
    placeholder,
    title,
    submitLabel,
    filters,
    suggestions,
    searchAgainLabel,
    defaultTerm,
    tab,
    withFilters = false,
    withSuggestions = false,
  } = useTabData('Search Header', settings)

  const initialTerm = withSuggestions
    ? text('Default Term', defaultTerm, tab)
    : undefined

  const [term, setTerm] = useState(initialTerm)

  const showFilters = boolean('Show filters', withFilters, tab)

  return {
    placeholder: text('Placeholder', placeholder, tab),
    title: text('Form Title (screen readers only)', title, tab),
    searchLabel: text('Search Button (screen readers only)', submitLabel, tab),
    filters: showFilters ? object('Filters', filters, tab) : undefined,
    suggestions: withSuggestions
      ? object('Suggestions', suggestions, tab)
      : undefined,
    onSearch: withSuggestions ? e => setTerm(e.target.value) : undefined,
    term: withSuggestions ? term : undefined,
    searchAgainLabel: showFilters
      ? text('Search Again (screen readers only)', searchAgainLabel, tab)
      : undefined,
  }
}

storiesOf('molecules/forms/SearchHeader', module).addWithJSX('Default', () => {
  const props = useSearchHeaderTab()

  return <SearchHeader {...props} />
})

storiesOf('molecules/forms/SearchHeader', module).addWithJSX(
  'with suggestions',
  () => {
    const props = useSearchHeaderTab({
      withSuggestions: true,
      defaultTerm: 'Hi',
    })

    return <SearchHeader {...props} />
  }
)

storiesOf('molecules/forms/SearchHeader', module).addWithJSX(
  'with filters',
  () => {
    const props = useSearchHeaderTab({ withFilters: true })

    return <SearchHeader {...props} />
  }
)
