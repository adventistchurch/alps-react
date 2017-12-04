import React from 'react'
import PropTypes from 'prop-types'

import renderTimes from '../../helpers/renderTimes'

const Segment = ({ number }) => (
  <span
    className={`nav-toggle__segment nav-toggle__segment--${
      number
    } theme--primary-background-color`}
  />
)
Segment.propTypes = {
  number: PropTypes.number.isRequired,
}

const NavToggle = ({ label }) => {
  return (
    <span
      className="nav-toggle js-toggle"
      data-toggled="header"
      data-prefix="nav"
    >
      <div className="nav-toggle__inner">{renderTimes(4, Segment)}</div>
      <strong className="nav-toggle__text upper theme--primary-text-color font--secondary--s">
        {label}
      </strong>
    </span>
  )
}

NavToggle.propTypes = {
  label: PropTypes.string,
}
NavToggle.defaultProps = {
  label: 'Menu',
}

export default NavToggle
