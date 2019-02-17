import React from 'react'
import PropTypes from 'prop-types'

import logos from './logos'

function Logo({ name, ...props }) {
  const Logo = logos[name] || logos['sda']

  return <Logo {...props} />
}

Logo.propTypes = {
  name: PropTypes.oneOf(Object.keys(logos)),
  fill: PropTypes.string,
}

export default Logo
