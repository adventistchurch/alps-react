import React from 'react'

import BreakoutBlock from './BreakoutBlock'

export default {
  title: 'ALPS/Molecules/Blocks/BreakoutBlock',
  component: BreakoutBlock,
}

const BreakoutBlockTemplate = props => <BreakoutBlock {...props} />

export const Default = BreakoutBlockTemplate.bind({})
Default.args = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  cta: 'Find out more',
  url: 'https://www.adventist.org',
}
