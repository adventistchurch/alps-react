import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import Search from './Search'
import data from './Search.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Search.defaultProps,
    ...data,
    ...settings,
  }
}

export function generalTab(settings = {}) {
  const {
    placeholder,
    title,
    submitLabel,
    suggestions,
    withSuggestions,
    tab,
  } = getTabData('General', settings)

  return {
    placeholder: text('Placeholder', placeholder, tab),
    title: text('Form Title (screen readers only)', title, tab),
    submitLabel: text('Submit Button (screen readers only)', submitLabel, tab),
    suggestions: withSuggestions
      ? object('Suggestions', suggestions, 'Suggestions')
      : null,
  }
}

storiesOf('molecules/forms/Search', module).addWithJSX('Default', () => {
  const props = generalTab()
  return <Search {...props} />
})

storiesOf('molecules/forms/Search', module).addWithJSX(
  'with suggestions',
  () => {
    const { suggestions, ...props } = generalTab({ withSuggestions: true })

    const [term, setTerm] = useState()

    const onSearch = e => setTerm(e.target.value)

    return (
      <Search
        {...props}
        hasFocus
        onSearch={onSearch}
        value={term}
        suggestions={term ? suggestions : null}
      />
    )
  }
)
