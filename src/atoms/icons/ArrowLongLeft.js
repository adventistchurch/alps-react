import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ArrowLongLeftIcon = ({ fill }) => (
  <Svg
    title="o-arrow__long--left"
    viewBox="0 0 19.42 9.82"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M1.42,6.32l3.5,3.5L6.33,8.41l-2.5-2.5H19.42v-2H3.83l2.5-2.5L4.92,0,1.42,3.5,0,4.91Z" />
  </Svg>
)

ArrowLongLeftIcon.propTypes = {
  fill: PropTypes.string,
}

export default ArrowLongLeftIcon
