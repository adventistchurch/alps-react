import React from 'react'

import FacetFilter from './FacetFilter'

export default {
  title: 'ALPS/Molecules/Forms/FacetFilter',
  component: FacetFilter,
}

const FacetFilterTemplate = props => <FacetFilter {...props} />

const yearOptions = [
  ...Array.from(Array(6), (x, index) => {
    const year = new Date().getFullYear() - index
    return { text: year, value: year }
  }),
]

const monthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
].map((x, i) => ({ text: x, value: i + 1 }))

const colorOptions = [
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Orange',
  'Pink',
  'Black',
].map(x => ({
  text: x,
  value: x,
}))

const countriesOptions = [
  'All countries',
  'Argentina',
  'Germany',
  'Norway',
  'Switzerland',
  'United States',
].map(x => ({
  text: x,
  value: x,
}))

export const Default = FacetFilterTemplate.bind({})
Default.args = {
  title: 'Filter the results',
  facets: [
    {
      name: 'years',
      options: yearOptions,
      defaultValue: 0,
    },
    {
      name: 'months',
      options: monthOptions,
      defaultValue: 'October',
    },
    {
      name: 'colors',
      options: colorOptions,
    },
    {
      name: 'countries',
      options: countriesOptions,
      defaultValue: 'ch',
    },
  ],
}
