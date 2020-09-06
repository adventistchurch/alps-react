import React from 'react'

import Figcaption from './Figcaption'

export default {
  title: 'ALPS/Molecules/Media/Figcaption',
  component: Figcaption,
}

export const Default = props => <Figcaption {...props} />
Default.args = {
  caption: 'Proin dictum lobortis luctus.',
}
