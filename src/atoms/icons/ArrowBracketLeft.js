import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ArrowBracketLeftIcon = ({ fill }) => (
  <Svg title="o-arrow__bracket--left" viewBox="0 0 10 10" fill={fill}>
    <path d="M3.25,6.41l3.5,3.5L8.16,8.5,4.66,5l3.5-3.5L6.75.09l-3.5,3.5L1.84,5Z" />
  </Svg>
)

ArrowBracketLeftIcon.propTypes = {
  fill: PropTypes.string,
}
ArrowBracketLeftIcon.defaultProps = {
  fill: '#9b9b9b',
}

export default ArrowBracketLeftIcon
