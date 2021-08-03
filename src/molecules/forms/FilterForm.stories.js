import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import FilterForm from './FilterForm'
import data from './FilterForm.stories.json'

function useTabData(name, settings = {}) {
  return {
    tab: name,
    ...FilterForm.defaultProps,
    ...data,
    ...settings,
  }
}

export function useFilterFormTab(settings = {}) {
  const {
    filterLabel,
    filterOptions,
    sortLabel,
    sortOptions,
    tab,
  } = useTabData('Search', settings)

  return {
    filterLabel: text('Filter Label', filterLabel, tab),
    filterOptions: object('Filter Options', filterOptions, tab),
    sortLabel: text('Sort Label', sortLabel, tab),
    sortOptions: object('Sort Options', sortOptions, tab),
  }
}

storiesOf('molecules/forms/FilterForm', module).addWithJSX('Default', () => {
  const props = useFilterFormTab()
  return <FilterForm {...props} />
})
