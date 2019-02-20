import React from 'react'
import PropTypes from 'prop-types'

function Figcaption({ caption, children }) {
  return (
    <figcaption className="o-figcaption">
      <p className="o-caption u-color--gray u-font--secondary--s">
        {caption || children}
      </p>
    </figcaption>
  )
}

Figcaption.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.string,
}

export default Figcaption
