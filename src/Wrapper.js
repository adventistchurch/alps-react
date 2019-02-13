import React from 'react'
import PropTypes from 'prop-types'

import LoadScript from './helpers/LoadScript'

function Wrapper({ children, primaryColor, secondaryColor, style }) {
  return (
    <div className={`u-theme--${primaryColor}`} style={style}>
      <div className={`body has-grid u-theme--${secondaryColor}`}>
        {children}
      </div>
      <LoadScript url="https://code.jquery.com/jquery-2.2.4.min.js" />
      <LoadScript url="//cdn.adventist.org/alps/3/latest/js/script.min.js" />
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  style: PropTypes.object,
}
Wrapper.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: '',
}

export default Wrapper
