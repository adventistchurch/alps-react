import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const PlusIcon = ({ fill }) => (
  <Svg viewBox="0 0 10 10" title="o-icon__plus" className={fill} fill="#9b9b9b">
    <path d="M10,4H6V0H4V4H0V6H4v4H6V6h4Z" />
  </Svg>
)

PlusIcon.propTypes = {
  fill: PropTypes.string,
}

export default PlusIcon
