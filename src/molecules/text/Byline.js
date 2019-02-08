import React from 'react'
import PropTypes from 'prop-types'

const Byline = ({ children }) => (
  <div className="byline u-font--secondary--s u-color--gray can-be--white">
    {children}
  </div>
)

Byline.propTypes = {
  children: PropTypes.string,
}

export default Byline
