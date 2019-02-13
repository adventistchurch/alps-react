import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import renderItems from '../../helpers/renderItems'

const AccordionItem = ({ heading, content }) => (
  <div className="c-accordion__item u-spacing--half u-border--left u-padding--half--left">
    <div className="c-accordion__heading js-toggle-parent u-font--primary--m u-theme--color--darker">
      <span className="u-icon u-icon--m c-accordion__arrow u-space--half--right u-theme--path-fill--darker">
        <Icon name="arrow-bracket-right" />
      </span>
      <strong>{heading}</strong>
    </div>
    <div className="c-accordion__content u-padding--half--left">{content}</div>
  </div>
)

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
}

const Accordion = ({ items }) => {
  return (
    <div className="c-accordion u-position--relative u-spacing {{ accordion_class }}">
      {renderItems(items, AccordionItem)}
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.array,
}

Accordion.defaultProps = {
  items: [],
}

export default Accordion
