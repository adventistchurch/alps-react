import React from 'react'

import Dropcap from './Dropcap'

export default {
  title: 'ALPS/Atoms/Texts/Dropcap',
  component: Dropcap,
}

const DropcapTemplate = props => <Dropcap {...props} />

export const Default = DropcapTemplate.bind({})
Default.args = {
  letter: 'L',
}
