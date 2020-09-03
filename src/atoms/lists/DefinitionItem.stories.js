import React from 'react'

import Definition from './Definition'
import DefinitionItem from './DefinitionItem'

export default {
  title: 'ALPS/Atoms/Lists/DefinitionItem',
  component: DefinitionItem,
}

const ItemTemplate = props => {
  return (
    <Definition>
      <DefinitionItem {...props} />
    </Definition>
  )
}

export const Default = ItemTemplate.bind({})
Default.args = {
  title: 'This is a term.',
  description:
    'This is the definition of that term, which both live in a <code>dl</code>.',
}
