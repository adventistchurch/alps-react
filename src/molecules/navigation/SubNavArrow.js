import React from 'react'
import PropTypes from 'prop-types'

import { svgFillColors } from '../../atoms/global/colors'

function SubNavItem({ fill }) {
  return (
    <span
      className={`c-subnav__arrow o-arrow--down ${
        fill ? `u-path-fill--${fill}` : ''
      }`}
    />
  )
}

SubNavItem.propTypes = {
  fill: PropTypes.oneOf(svgFillColors),
}

export default SubNavItem
