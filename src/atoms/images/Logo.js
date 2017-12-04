import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const Logo = props => {
  return <Image {...props} />
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default Logo
