import React from 'react'
import PropTypes from 'prop-types'

const Figcaption = ({ caption }) => (
  <figcaption className="figcaption">
    <p className="font--secondary--xs">{caption}</p>
  </figcaption>
)

Figcaption.propTypes = {
  caption: PropTypes.string.isRequired,
}

export default Figcaption
