import React from 'react'

import Figcaption from './Figcaption'

export default {
  title: 'ALPS/Molecules/Media/Figcaption',
  component: Figcaption,
}

const FigcaptionTemplate = props => <Figcaption {...props} />

export const Default = FigcaptionTemplate.bind({})
Default.args = {
  caption: 'Proin dictum lobortis luctus.',
}
