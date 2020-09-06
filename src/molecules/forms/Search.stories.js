import React from 'react'

import Search from './Search'

export default {
  title: 'ALPS/Molecules/Forms/Search',
  component: Search,
}

const SearchTemplate = props => <Search {...props} />

export const Default = SearchTemplate.bind({})
Default.args = {
  placeholder: 'Search...',
  submitLabel: 'Search',
  title: 'Search',
}

export const WithSuggestions = SearchTemplate.bind({})
WithSuggestions.args = {
  ...Default.args,
  suggestions: [
    { key: 'abc1', text: 'Hi', href: '#' },
    { key: 'abc2', text: 'Hello', href: '#' },
    { key: 'abc3', text: 'Hola', href: '#' },
    { key: 'abc4', text: 'Hallo', href: '#' },
    { key: 'abc5', text: 'Hallo', href: '#' },
    { key: 'abc6', text: 'Hallooo', href: '#' },
  ],
}

export const WithFocus = SearchTemplate.bind({})
WithFocus.args = {
  ...Default.args,
  hasFocus: true,
}
