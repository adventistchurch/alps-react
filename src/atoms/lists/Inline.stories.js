import React from 'react'

import Inline from './Inline'

export default {
  title: 'ALPS/Atoms/Lists/Inline',
  component: Inline,
}

const InlineTemplate = props => <Inline {...props} />

export const Default = InlineTemplate.bind({})
Default.args = {
  items: [
    {
      text: 'Inline Item A',
    },
    {
      text: 'Inline Item B',
    },
    {
      text: 'Inline Item C',
    },
    {
      text: 'Inline Item D',
    },
  ],
}
