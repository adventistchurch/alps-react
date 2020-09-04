import React from 'react'

import Svg from './Svg'

export default {
  title: 'ALPS/Helpers/Svg',
  component: Svg,
}

export const Default = ({ path, ...props }) => (
  <Svg viewBox="0 0 10 10" title="Plus icon" {...props}>
    <path d="M10,4H6V0H4V4H0V6H4v4H6V6h4Z" />
  </Svg>
)
Default.args = {}
