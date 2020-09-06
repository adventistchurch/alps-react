import React from 'react'

import ShareTools from './ShareTools'

export default {
  title: 'ALPS/Molecules/Components/ShareTools',
  component: ShareTools,
}

const ShareToolsTemplate = props => <ShareTools {...props} />

export const Default = ShareToolsTemplate.bind({})
Default.args = {}
