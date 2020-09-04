import React from 'react'

import Caption from './Caption'

export default {
  title: 'ALPS/Atoms/Texts/Caption',
  component: Caption,
}

const CaptionTemplate = props => <Caption {...props} />

export const Default = CaptionTemplate.bind({})
Default.args = {
  text: 'Proin dictum lobortis luctus.',
}

export const AsChildren = CaptionTemplate.bind({})
AsChildren.args = {
  children: 'Proin dictum lobortis luctus.',
}
