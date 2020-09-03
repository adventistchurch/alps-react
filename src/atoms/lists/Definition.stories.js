import React from 'react'

import Definition from './Definition'

export default {
  title: 'ALPS/Atoms/Lists/Definition',
  component: Definition,
}

const ListTemplate = props => <Definition {...props} />

export const Default = ListTemplate.bind({})
Default.args = {
  items: [
    {
      title: 'Definition List',
      description:
        'A number of connected items or names written or printed consecutively, typically one below the other.',
    },
    {
      title: 'This is a term.',
      description:
        'This is the definition of that term, which both live in a <code>dl</code>.',
    },
    {
      title: 'Here is another term.',
      description: 'And it gets a definition too, which is this line.',
    },
    {
      title: 'Here is term that shares a definition with the term below.',
      description: 'And it gets a definition too, which is this line.',
    },
  ],
}
