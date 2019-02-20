import React from 'react'
import PropTypes from 'prop-types'

function Byline({ children }) {
  return (
    <div className="byline u-font--secondary--s u-color--gray can-be--white">
      {children}
    </div>
  )
}
Byline.propTypes = {
  children: PropTypes.string,
}

export default Byline
