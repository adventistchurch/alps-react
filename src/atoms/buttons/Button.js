import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icons/Icon'

const Button = ({ text, url, icon }) => {
  return (
    <a href={url} className="btn theme--secondary-background-color">
      {text}
      {icon && (
        <span className="dib icon--s">
          <Icon name={icon} fill="fill--white" />
        </span>
      )}
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
}

export default Button
