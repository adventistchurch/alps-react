import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import FacetFilter from './FacetFilter'

import data from './FacetFilter.stories.json'

const currentDate = new Date()
const yearFacet = {
  name: 'years',
  options: [
    {
      text: 'All years',
      value: 0,
    },
    ...Array.from(Array(6), (x, index) => {
      const year = currentDate.getFullYear() - index
      return { text: year, value: year }
    }),
  ],
  defaultValue: 0,
}

const propsTab = 'Props'

storiesOf('molecules/forms/FacetFilter', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Form Title *', data.title, propsTab)
    const showButton = boolean('Show Button', false, propsTab)
    const filterLabel = text('Button Label', 'Filter', propsTab)
    const facets = object('Facets *', [yearFacet, ...data.facets], propsTab)
    return (
      <FacetFilter
        title={title}
        facets={facets}
        showButton={showButton}
        filterLabel={filterLabel}
      />
    )
  })
