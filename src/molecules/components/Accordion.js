import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'

import AccordionItem from './AccordionItem'

function Accordion({ children, items, className }) {
  return (
    <Div className={`c-accordion ${className}`} position="relative" spacing>
      {Array.isArray(items) ? renderItems(items, AccordionItem) : children}
    </Div>
  )
}

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.array,
}
Accordion.defaultProps = {
  className: '',
}

export default Accordion
