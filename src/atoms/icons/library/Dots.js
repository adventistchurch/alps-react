import React from 'react'

import Svg from '../../../helpers/Svg'

export default function Dots(props) {
  return (
    <Svg {...props} viewBox="0 0 10 10">
      <path d="M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z" />
    </Svg>
  )
}
