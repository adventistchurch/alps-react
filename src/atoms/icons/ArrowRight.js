import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ArrowRightIcon = ({ fill }) => (
  <Svg
    title="Right arrow icon"
    viewBox="0 0 50 50"
    className={fill}
    fill="#438390"
  >
    <path d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM21.69,38.25l-3.43-3.43L28.07,25l-9.82-9.82,3.43-3.43L34.93,25Z" />
  </Svg>
)

ArrowRightIcon.propTypes = {
  fill: PropTypes.string,
}

export default ArrowRightIcon
