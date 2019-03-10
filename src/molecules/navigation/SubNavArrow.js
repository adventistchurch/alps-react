import React from 'react'
import PropTypes from 'prop-types'

import { svgFillColors } from '../../atoms/global/colors'
import { Span } from '../../helpers/Element'

function SubNavArrow({ fill }) {
  return <Span className="c-subnav__arrow o-arrow--down" pathFill={fill} />
}

SubNavArrow.propTypes = {
  fill: PropTypes.oneOf(svgFillColors),
}

export default SubNavArrow
