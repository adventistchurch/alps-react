import React from 'react'

import SearchFilter from './SearchFilter'

export default {
  title: 'ALPS/Molecules/Forms/SearchFilter',
  component: SearchFilter,
}

const SearchFilterTemplate = props => <SearchFilter {...props} />

export const Default = SearchFilterTemplate.bind({})
Default.args = {}

export const WithOptions = SearchFilterTemplate.bind({})
WithOptions.args = {
  ...Default.args,
  filters: [
    {
      title: 'Media',
      options: [
        {
          id: 1,
          checked: true,
          type: 'checkbox',
          name: 'Option 1',
          value: 'Option 1',
        },
        {
          id: 2,
          type: 'checkbox',
          name: 'Option 2',
          value: 'Option 2',
        },
      ],
    },
  ],
  sorting: {
    title: 'Sort By',
    options: [
      {
        id: 1,
        checked: true,
        name: 'Option 1',
        value: 'Option 1',
      },
      {
        id: 2,
        name: 'Option 2',
        value: 'Option 2',
      },
    ],
  },
}
