import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'

import AccordionItem from './AccordionItem'

export default function Accordion({ children, items, className }) {
  return (
    <Div className={`c-accordion ${className}`} position="relative" spacing>
      {Array.isArray(items) ? renderItems(items, AccordionItem) : children}
    </Div>
  )
}

Accordion.propTypes = {
  /**
   * To provide the items as nested elements (expected to be an array of `AccordionItem`). It will not have effect if `items` prop is defined
   */
  children: PropTypes.node,
  /**
   * For extra classes
   */
  className: PropTypes.string,
  /**
   * To provide the items as data
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      content: PropTypes.node,
      heading: PropTypes.node.isRequired,
      icon: PropTypes.string,
      onChange: PropTypes.func,
      open: PropTypes.bool,
    })
  ),
}
Accordion.defaultProps = {
  className: '',
}
