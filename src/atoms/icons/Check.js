import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const CheckIcon = ({ fill }) => (
  <Svg title="Check icon" viewBox="0 0 500 500" className={fill}>
    <title>Check</title>
    <path d="M427.4 10.3l-247 377-106.8-95.4-13.8-12.2-44.7 50.1L178 475.1l15.9 14.2L473.5 62.6l10.1-15.4z" />
  </Svg>
)

CheckIcon.propTypes = {
  fill: PropTypes.string,
}

export default CheckIcon
