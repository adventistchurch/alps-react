import React from 'react'
import PropTypes from 'prop-types'

import { svgFillColors } from '../../atoms/global/colors'
import { Span } from '../../helpers/Element'

function SubNavArrow({ className, fill, isSubNav, onClick }) {
  return (
    <Span
      className={`c-primary-nav${
        isSubNav ? '__subnav' : ''
      }__arrow c-subnav__arrow o-arrow--down ${className}`}
      onClick={onClick}
      pathFill={fill}
    />
  )
}

SubNavArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.oneOf(svgFillColors),
  onClick: PropTypes.func,
  isSubNav: PropTypes.bool,
}
SubNavArrow.defaultProps = {
  className: '',
}

export default SubNavArrow
