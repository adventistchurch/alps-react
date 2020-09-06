import React from 'react'

import SearchHeader from './SearchHeader'

export default {
  title: 'ALPS/Molecules/Forms/SearchHeader',
  component: SearchHeader,
}

const SearchHeaderTemplate = props => <SearchHeader {...props} />

export const Default = SearchHeaderTemplate.bind({})
Default.args = {}

export const WithSuggestions = SearchHeaderTemplate.bind({})
WithSuggestions.args = {
  ...Default.args,
  suggestions: [
    { key: 'abc1', text: 'Hi', href: '#' },
    { key: 'abc2', text: 'History', href: '#' },
    { key: 'abc3', text: 'Hello', href: '#' },
    { key: 'abc4', text: 'Hola', href: '#' },
    { key: 'abc5', text: 'Hallo', href: '#' },
  ],
}

export const WithFilters = SearchHeaderTemplate.bind({})
WithFilters.args = {
  ...Default.args,
  filters: [
    {
      title: 'Media',
      options: [
        {
          id: 1,
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
    {
      title: 'Category',
      options: [
        {
          id: 1,
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
    {
      title: 'Category',
      options: [
        {
          id: 1,
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
  ],
}
