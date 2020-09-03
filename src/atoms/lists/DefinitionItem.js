import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

export default function DefinitionItem({ title, description }) {
  return (
    <>
      <Element as="dt" paddingTop>
        {title}
      </Element>
      <Element as="dd" paddingBottom>
        {description}
      </Element>
    </>
  )
}
DefinitionItem.propTypes = {
  /**
   * Item's title
   */
  title: PropTypes.node.isRequired,
  /**
   * Item's description
   */
  description: PropTypes.node.isRequired,
}
