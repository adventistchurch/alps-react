import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icons/Icon'

const Button = ({ text, url, icon }) => (
  <a href={url} className="btn theme--secondary-background-color">
    {text}{' '}
    {icon && (
      <span className="dib icon--s">
        <Icon name={icon} color="fill--white" />
      </span>
    )}
  </a>
)

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
}

export default Button
