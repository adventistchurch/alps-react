import React from 'react'

import ContentBlockExpand from './ContentBlockExpand'

export default {
  title: 'ALPS/Molecules/Blocks/ContentBlockExpand',
  component: ContentBlockExpand,
}

const ContentBlockExpandTemplate = props => <ContentBlockExpand {...props} />

export const Default = ContentBlockExpandTemplate.bind({})
Default.args = {
  title: 'The General Conference.',
  kicker:
    'Coordinates the global ministry of the Seventh-day Adventist Church.',
  description:
    'Is responsible for the spiritual and developmental plans of the church around the world.',
}
