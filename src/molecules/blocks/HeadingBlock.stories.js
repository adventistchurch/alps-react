import React from 'react'

import HeadingBlock from './HeadingBlock'

export default {
  title: 'ALPS/Molecules/Blocks/HeadingBlock',
  component: HeadingBlock,
}

const HeadingBlockTemplate = props => <HeadingBlock {...props} />

export const Default = HeadingBlockTemplate.bind({})
Default.args = {
  title: 'The General Conference.',
  linkText: 'More info',
  url: 'http://adventist.org',
}
