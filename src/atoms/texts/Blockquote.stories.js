import React from 'react'

import Blockquote from './Blockquote'

export default {
  title: 'ALPS/Atoms/Texts/Blockquote',
  component: Blockquote,
}

const BlockquoteTemplate = props => <Blockquote {...props} />

export const Default = BlockquoteTemplate.bind({})
Default.args = {
  text: 'Proin dictum lobortis luctus.',
}

export const AsChildren = ({ children, ...props }) => {
  return (
    <Blockquote {...props}>
      <em>{children}</em>
    </Blockquote>
  )
}
AsChildren.args = {
  children: Default.args.text,
}
