import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, text, withKnobs } from '@storybook/addon-knobs'

import FacetFilter from './FacetFilter'

const propsTab = 'Props'
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const defaults = {
  action: '/doSomething',
  title: 'Filter the results',
  facets: [
    {
      name: 'years',
      options: [
        {
          text: 'All years',
          value: 0,
        },
        {
          text: currentYear,
          value: currentYear,
        },
        {
          text: currentYear - 1,
          value: currentYear - 1,
        },
        {
          text: currentYear - 2,
          value: currentYear - 2,
        },
        {
          text: currentYear - 3,
          value: currentYear - 3,
        },
        {
          text: currentYear - 4,
          value: currentYear - 4,
        },
        {
          text: currentYear - 5,
          value: currentYear - 5,
        },
      ],
      defaultValue: 0,
    },
    {
      name: 'months',
      options: [
        {
          text: 'All months',
          value: 1,
        },
        {
          text: 'January',
          value: 1,
        },
        {
          text: 'February',
          value: 2,
        },
        {
          text: 'March',
          value: 3,
        },
        {
          text: 'April',
          value: 4,
        },
        {
          text: 'Mai',
          value: 5,
        },
        {
          text: 'June',
          value: 6,
        },
        {
          text: 'July',
          value: 7,
        },
        {
          text: 'August',
          value: 8,
        },
        {
          text: 'September',
          value: 9,
        },
        {
          text: 'October',
          value: 10,
        },
        {
          text: 'November',
          value: 11,
        },
        {
          text: 'December',
          value: 12,
        },
      ],
      defaultValue: 0,
    },
    {
      name: 'colors',
      options: [
        {
          text: 'All colors',
          value: 'all',
        },
        {
          text: 'Red',
          value: 'red',
        },
        {
          text: 'Green',
          value: 'green',
        },
        {
          text: 'Blue',
          value: 'blue',
        },
        {
          text: 'Yellow',
          value: 'yellow',
        },
      ],
      defaultValue: 'red',
    },
    {
      name: 'countries',
      options: [
        {
          text: 'All countries',
          value: 'all',
        },
        {
          text: 'United States',
          value: 'us',
        },
        {
          text: 'Germany',
          value: 'de',
        },
        {
          text: 'Switzerland',
          value: 'ch',
        },
        {
          text: 'Norway',
          value: 'no',
        },
      ],
      defaultValue: 'ch',
    },
  ],
}

storiesOf('molecules/forms/FacetFilter', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const action = text('Form Action', defaults.action, propsTab)
    const title = text('Form Title', defaults.title, propsTab)
    const facets = array('Options', defaults.facets, propsTab)
    return (
      <FacetFilter action={action} title={title} facets={facets} years months />
    )
  })
