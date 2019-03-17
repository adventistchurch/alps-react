import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

function AccordionItem({ heading, content }) {
  const { onToggle, openClass } = useToggle()

  return (
    <Div
      className={`c-accordion__item ${openClass}`}
      borderSide="left"
      paddingSide="left"
      paddingSize="half"
      spacingSize="half"
    >
      <Div
        className="c-accordion__heading"
        fontType="primary"
        fontSize="m"
        onClick={onToggle}
        themeColor="darker"
      >
        <IconWrap
          className="c-accordion__arrow"
          name="arrow-bracket-right"
          size="m"
          spaceSide="right"
          spaceSize="half"
          themePathFill="darker"
        />
        <strong>{heading}</strong>
      </Div>
      <Div
        className="c-accordion__content"
        paddingSide="left"
        paddingSize="half"
      >
        {content}
      </Div>
    </Div>
  )
}

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
}

function Accordion({ items, className }) {
  const classNames = ['c-accordion']
  if (className) classNames.push(className)

  return (
    <Div className={classNames.join(' ')} position="relative" spacing>
      {renderItems(items, AccordionItem)}
    </Div>
  )
}

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
}

Accordion.defaultProps = {
  items: [],
}

export default Accordion
