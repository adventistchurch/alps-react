import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ArrowLeftIcon = ({ fill }) => (
  <Svg
    title="Left arrow icon"
    viewBox="0 0 50 50"
    className={fill}
    fill="#438390"
  >
    <path d="M0,25A25,25,0,1,0,25,0,25,25,0,0,0,0,25Zm15.07,0L28.31,11.75l3.43,3.43L21.93,25l9.82,9.82-3.43,3.43Z" />
  </Svg>
)

ArrowLeftIcon.propTypes = {
  fill: PropTypes.string,
}

export default ArrowLeftIcon
