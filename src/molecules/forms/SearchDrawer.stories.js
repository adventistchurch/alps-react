import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import SearchDrawer from './SearchDrawer'
import data from './SearchDrawer.stories.json'

function useTabData(name, settings = {}) {
  return {
    tab: name,
    ...SearchDrawer.defaultProps,
    ...data,
    ...settings,
  }
}

export function useSearchDrawerTab(settings = {}) {
  const {
    placeholder,
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
    suggestions: withSuggestions
      ? object('Suggestions', term ? suggestions : null, tab)
      : undefined,
    onSearch: withSuggestions ? onSearch : undefined,
    term,
  }
}

storiesOf('molecules/forms/SearchDrawer', module).addWithJSX('Default', () => {
  const props = useSearchDrawerTab()
  return <SearchDrawer {...props} />
})

storiesOf('molecules/forms/SearchDrawer', module).addWithJSX(
  'with suggestions',
  () => {
    const props = useSearchDrawerTab({
      withSuggestions: true,
      defaultTerm: 'Hi',
    })

    return <SearchDrawer {...props} hasFocus />
  }
)
