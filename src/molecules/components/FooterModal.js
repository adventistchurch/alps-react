import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'

function FooterModal({ children, text }) {
  return (
    <div className="c-modal u-theme--background-color-trans--base u-color--white u-padding text">
      <p className="c-modal__body u-font--primary">
        <strong>{children || text}</strong>
      </p>
      <button className="c-modal__close u-icon u-icon--m u-path-fill--white js-toggle-parent">
        <Icon name="close" color="white" />
      </button>
    </div>
  )
}

FooterModal.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}
FooterModal.defaultProps = {}

export default FooterModal
