import React from 'react'
import PropTypes from 'prop-types'

function Caption({ children, text }) {
  return (
    <div className="o-caption u-color--gray u-font--secondary--s">
      {children || text}
    </div>
  )
}

Caption.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Caption
