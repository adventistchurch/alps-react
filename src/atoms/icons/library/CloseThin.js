import React from 'react'

import Svg from '../../../helpers/Svg'

export default function Close(props) {
  return (
    <Svg viewBox="0 0 27 27" stroke="#9b9b9b" {...props}>
      <path d="M25.6951 25.6951L1.30488 1.30488" strokeLinecap="square" />
      <path d="M1.30488 25.6951L25.6951 1.30488" strokeLinecap="square" />
    </Svg>
  )
}
