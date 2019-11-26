import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import SearchFilter from './SearchFilter'

import data from './SearchFilter.stories.json'

const propsTab = 'Props'
const filtersTab = 'Filters'
const sortingTab = 'Sorting'

storiesOf('molecules/forms/SearchFilter', module).addWithJSX('Default', () => {
  const placeholder = text('Placeholder', data.placeholder, propsTab)
  const searchLabel = text('Search Button', data.searchLabel, propsTab)
  // const optionsLabel = text(
  //   'Options Button',
  //   'n/a (the text is set in the css)',
  //   propsTab
  // )
  const filters = object('Filters', data.filters, filtersTab)
  const sorting = object('Sorting', data.sorting, sortingTab)
  return (
    <SearchFilter
      filters={filters}
      placeholder={placeholder}
      searchLabel={searchLabel}
      sorting={sorting}
    />
  )
})
