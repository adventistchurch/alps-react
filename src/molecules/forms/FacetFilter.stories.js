import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import FacetFilter from './FacetFilter'

import data from './FacetFilter.stories.json'

const yearFacet = {
  name: 'years',
  options: [
    {
      text: 'All years',
      value: 0,
    },
    ...Array.from(Array(6), (x, index) => {
      const year = new Date().getFullYear() - index
      return { text: year, value: year }
    }),
  ],
  defaultValue: 0,
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...FacetFilter.defaultProps,
    ...data,
    ...settings,
  }
}

export function facetsTab(settings = {}) {
  const { title, filterLabel, facets, tab } = getTabData('Facets', settings)

  return {
    title: text('Title', title, tab),
    filterLabel: text('Label', filterLabel, tab),
    facets: object('Facets (filters)', [yearFacet, ...facets], tab),
  }
}

storiesOf('molecules/forms/FacetFilter', module).addWithJSX('Default', () => {
  const props = facetsTab()
  return <FacetFilter {...props} />
})
