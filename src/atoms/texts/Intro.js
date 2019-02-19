import React from 'react'
import PropTypes from 'prop-types'

function Intro({ children, text }) {
  return <p className="o-intro text">{children || text}</p>
}

Intro.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Intro
