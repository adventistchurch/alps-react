import React from 'react'

import List from './List'

export default {
  title: 'ALPS/Atoms/Lists/List',
  component: List,
}

const ListTemplate = props => <List {...props} />

export const Ordered = ListTemplate.bind({})
Ordered.args = {
  as: 'ol',
  items: [
    {
      text: 'Item A',
    },
    {
      text: 'Item B',
    },
    {
      text: 'Item C',
      nestedAs: 'ol',
      items: [
        {
          text: 'Sub-Item C 1',
        },
        {
          text: 'Sub-Item C 2',
        },
        {
          text: 'Sub-Item C 3',
        },
      ],
    },
    {
      text: 'Item D',
      nestedAs: 'ul',
      items: [
        {
          text: 'Sub-Item D 1',
        },
        {
          text: 'Sub-Item D 2',
        },
        {
          text: 'Sub-Item D 3',
        },
      ],
    },
  ],
}

export const Unordered = ListTemplate.bind({})
Unordered.args = {
  ...Ordered.args,
  as: 'ul',
}
