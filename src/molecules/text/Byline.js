import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

function Byline({ children }) {
  return (
    <Div
      className="byline"
      canBe="white"
      color="gray"
      fontType="secondary"
      fontSize="s"
    >
      {children}
    </Div>
  )
}
Byline.propTypes = {
  children: PropTypes.string,
}

export default Byline
