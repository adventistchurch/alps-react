import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

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
  const { placeholder, title, submitLabel, tab } = getTabData(
    'General',
    settings
  )

  return {
    placeholder: text('Placeholder', placeholder, tab),
    title: text('Form Title (visible only for screen readers)', title, tab),
    submitLabel: text(
      'Submit Button (visible only for screen readers)',
      submitLabel,
      tab
    ),
  }
}

storiesOf('molecules/forms/Search', module).addWithJSX('Default', () => {
  const props = generalTab()
  return <Search {...props} />
})
