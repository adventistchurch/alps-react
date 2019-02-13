import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../atoms/icons/Icon'

const MediaCallToAction = ({ label, url, icon }) => (
  <a className="c-block__button o-button o-button--outline" href={url}>
    {label}
    {icon && (
      <span className="u-icon u-icon--m u-path-fill--base u-space--half--left">
        <Icon name={icon} />
      </span>
    )}
  </a>
)
MediaCallToAction.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default MediaCallToAction
