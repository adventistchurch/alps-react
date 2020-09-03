import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import DefinitionItem from './DefinitionItem'

/**
 * Definition list component
 */
export default function Definition({ items, children, ...props }) {
  return (
    <Element as="dl" {...props}>
      {Array.isArray(items)
        ? items.map((props, i) => (
            <DefinitionItem key={`definition-item-${i}`} {...props} />
          ))
        : children}
    </Element>
  )
}

Definition.propTypes = {
  /**
   * Use this provide items as nested children (we recommend they to be `DefinitionItem`)
   */
  children: PropTypes.node,
  /**
   * List of items to display
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      description: PropTypes.node.isRequired,
    })
  ),
}
