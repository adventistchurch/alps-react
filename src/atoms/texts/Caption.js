import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

export default function Caption({ children, text }) {
  return (
    <Div className="o-caption" color="gray" fontSize="s" fontType="secondary">
      {children || text}
    </Div>
  )
}

Caption.propTypes = {
  /**
   * Sets content as children (prevails over `text` prop).
   */
  children: PropTypes.node,
  /**
   * Sets content as text.
   */
  text: PropTypes.string,
}
