import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import renderItems from '../../helpers/renderItems'
import useToggle from '../../helpers/useToggle'

function AccordionItem({ heading, content }) {
  const { onToggle, openClass } = useToggle()

  return (
    <div
      className={`c-accordion__item u-spacing--half u-border--left u-padding--half--left ${openClass}`}
    >
      <div
        className="c-accordion__heading u-font--primary--m u-theme--color--darker"
        onClick={onToggle}
      >
        <span className="u-icon u-icon--m c-accordion__arrow u-space--half--right u-theme--path-fill--darker">
          <Icon name="arrow-bracket-right" />
        </span>
        <strong>{heading}</strong>
      </div>
      <div className="c-accordion__content u-padding--half--left">
        {content}
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
}

function Accordion({ items, className }) {
  return (
    <div className={`c-accordion u-position--relative u-spacing ${className}`}>
      {renderItems(items, AccordionItem)}
    </div>
  )
}

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
}

Accordion.defaultProps = {
  className: '',
  items: [],
}

export default Accordion
