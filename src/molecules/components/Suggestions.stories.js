import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'

import Suggestions from './Suggestions'

import data from './Suggestions.stories.json'

function useTabData(name, settings = {}) {
  return {
    tab: name,
    ...Suggestions.defaultProps,
    ...data,
    ...settings,
  }
}

export function useSuggestionsTab(settings = {}) {
  const { items, title, otherItems, otherTitle, visible, tab } = useTabData(
    'Search',
    settings
  )

  return {
    visible: boolean('Visible', visible, tab),
    title: text('Title', title, tab),
    items: object('Items', items, tab),
    otherTitle: text('Other Title', otherTitle, tab),
    otherItems: object('Other Items', otherItems, tab),
  }
}

storiesOf('molecules/components/Suggestions', module).addWithJSX(
  'Default',
  () => {
    const props = useSuggestionsTab()
    return <Suggestions {...props} />
  }
)
