import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function Byline({ children, ...props }) {
  return (
    <Element
      className="byline"
      canBe="white"
      color="gray"
      fontType="secondary"
      fontSize="s"
      {...props}
    >
      {children}
    </Element>
  )
}
Byline.propTypes = {
  children: PropTypes.string,
  ...Element.propTypes,
}

export default Byline
