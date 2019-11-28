import React from 'react'
import PropTypes from 'prop-types'

import logos, { logoNames } from './logos/index'
import { svgFillColors, svgFillClass } from '../global/colors'

function Logo({ name, ...props }) {
  const Logo = logos[name] || logos['sda']

  return <Logo {...props} />
}

Logo.propTypes = {
  name: PropTypes.oneOf(logoNames),
  fill: PropTypes.oneOf(svgFillColors),
  fillAccent: PropTypes.string,
}

Logo.fills = svgFillClass
Logo.names = logoNames

export default Logo
