import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ArrowShortLeftIcon = ({ fill }) => (
  <Svg
    title="o-arrow__short--left"
    viewBox="0 0 10 10"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M5,9.91,6.38,8.5,3.88,6H10V4H3.88l2.5-2.5L5,.09.05,5Z" />
  </Svg>
)

ArrowShortLeftIcon.propTypes = {
  fill: PropTypes.string,
}

export default ArrowShortLeftIcon
