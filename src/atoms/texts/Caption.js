import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

function Caption({ children, text }) {
  return (
    <Div className="o-caption" color="gray" fontSize="s" fontType="secondary">
      {children || text}
    </Div>
  )
}

Caption.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Caption
