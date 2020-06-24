import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import Search from './Search'
import data from './Search.stories.json'

function useTabData(name, settings = {}) {
  return {
    tab: name,
    ...Search.defaultProps,
    ...data,
    ...settings,
  }
}

export function useSearchTab(settings = {}) {
  const {
    placeholder,
    title,
    suggestions,
    defaultTerm,
    tab,
    withSuggestions = false,
  } = useTabData('Search', settings)

  const initialTerm = withSuggestions
    ? text('Default Term', defaultTerm, tab)
    : undefined

  const [term, setTerm] = useState(initialTerm)

  const onSearch = e => {
    setTerm(e.target.value)
  }

  return {
    placeholder: text('Placeholder', placeholder, tab),
    title: text('Form Title (screen readers only)', title, tab),
    suggestions: withSuggestions
      ? object('Suggestions', term ? suggestions : null, tab)
      : undefined,
    onSearch: withSuggestions ? onSearch : undefined,
    term,
  }
}

storiesOf('molecules/forms/Search', module).addWithJSX('Default', () => {
  const props = useSearchTab()
  return <Search {...props} />
})

storiesOf('molecules/forms/Search', module).addWithJSX(
  'with suggestions',
  () => {
    const props = useSearchTab({ withSuggestions: true, defaultTerm: 'Hi' })

    return <Search {...props} hasFocus />
  }
)
