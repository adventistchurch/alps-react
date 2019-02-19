import React from 'react'
import PropTypes from 'prop-types'

import logos, { logoNames } from './logos'
import { svgFillColors } from '../global/colors'

function Logo({ name, ...props }) {
  const Logo = logos[name] || logos['sda']

  return <Logo {...props} />
}

Logo.propTypes = {
  name: PropTypes.oneOf(logoNames),
  fill: PropTypes.oneOf(svgFillColors),
  fillAccent: PropTypes.string,
}

export default Logo
