import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const MenuIcon = ({ fill }) => (
  <Svg title="o-icon__menu" viewBox="0 0 10 10" className={fill} fill="#9b9b9b">
    <path d="M0,0H10V2H0ZM0,10H10V8H0ZM0,6H10V4H0Z" />
  </Svg>
)

MenuIcon.propTypes = {
  fill: PropTypes.string,
}

export default MenuIcon
