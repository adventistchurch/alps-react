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
const dataTab = 'Data'

storiesOf('molecules/forms/FacetFilter', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Form Title *', data.title, propsTab)
    const filterLabel = text(
      'Filter Button (visible only for screen readers)',
      'Filter',
      propsTab
    )
    const facets = object('Facets *', [yearFacet, ...data.facets], dataTab)
    return (
      <FacetFilter title={title} facets={facets} filterLabel={filterLabel} />
    )
  })
