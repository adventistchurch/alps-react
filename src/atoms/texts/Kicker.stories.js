import React from 'react'

import Kicker from './Kicker'

export default {
  title: 'ALPS/Atoms/Texts/Kicker',
  component: Kicker,
}

const KickerTemplate = props => <Kicker {...props} />

export const Default = KickerTemplate.bind({})
Default.args = {
  text: 'A Kicker title',
}
