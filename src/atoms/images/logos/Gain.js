import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../../helpers/Svg'

function Gain({ fill, fillAccent }) {
  return (
    <Svg title="logo-gain" viewBox="0 0 1177 400">
      <g fill="none">
        <path
          fill={fillAccent}
          d="M840 43.858C840 76.625 814.832 95 786 95s-44-16.79-44-44c0-31.11 25.277-51 53-51 26.61 0 45 16.649 45 43.858z"
        />
        <path
          fill={fill}
          d="M1177 22v374h-105.514L1009 272c-14.05-26.665-35.716-71.998-65-136l2.724 260H855V22h119l59 115c20.513 37.2 42.357 87.13 59 131l-7-246h92zM193 251.5h50V316c-4.425 1.673-17.696 3.5-31 3.5-61.546 0-106.5-40.524-106.5-110.5 0-76.068 50.969-108.5 112.5-108.5 42.688 0 67.435 6.612 88.5 15.5l20-80c-19.404-9.44-57.548-18-108-18C97.071 18 .537 84.044 0 214c0 53.873 18.068 102.176 53 135.5 33.8 32.21 83.762 50.5 157.5 50.5 48.788 0 101.292-12.572 129-22V174H193v77.5zM688 381l5 15h87.115L832 123h-95l-49 258zm0 0l-3 15H584.91l-23.752-87H465.03l-20.991 87H340L449 21h133l106 360zM547 235L511 94l-32.698 141H547z"
        />
        <polygon fill={fillAccent} points="693 396 688 381 685 396" />
      </g>
    </Svg>
  )
}

Gain.propTypes = {
  fill: PropTypes.string,
  fillAccent: PropTypes.string,
}
Gain.defaultProps = {
  fill: '#000',
  fillAccent: '#d0021b',
}

export default Gain
