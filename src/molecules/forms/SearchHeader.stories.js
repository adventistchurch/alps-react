import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs, boolean } from '@storybook/addon-knobs'

import SearchHeader from './SearchHeader'

import data from './SearchHeader.stories.json'

const propsTab = 'Props'
const filtersTab = 'Filters'

storiesOf('molecules/forms/SearchHeader', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const placeholder = text('Placeholder', data.placeholder, propsTab)
    const searchLabel = text('Search Button', data.searchLabel, propsTab)
    const settingsLabel = text(
      'Settings Button',
      'n/a (the text is set in the css)',
      propsTab
    )
    const showSearchAgain = boolean(
      'Show Search Again Button',
      true,
      filtersTab
    )
    const searchAgainLabel = text(
      'Search Again Button',
      data.searchAgainLabel,
      propsTab
    )
    const filters = object('Filters', data.filters, filtersTab)
    return (
      <SearchHeader
        filters={filters}
        placeholder={placeholder}
        searchAgainLabel={searchAgainLabel}
        searchLabel={searchLabel}
        showSearchAgain={showSearchAgain}
      />
    )
  })
