import React from 'react'
import PropTypes from 'prop-types'

import { svgFillClass, svgFillColors } from '../../atoms/global/colors'

import Icon, { iconSizes } from '../../atoms/icons/Icon'

function IconWrap({ name, size, fill, color, className, ...props }) {
  return (
    <span
      className={`u-icon u-icon--${size} ${svgFillClass}--${fill} ${className}`}
      {...props}
    >
      <Icon name={name} color={color} />
    </span>
  )
}

IconWrap.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.oneOf(svgFillColors),
  color: Icon.propTypes.color,
  name: Icon.propTypes.name,
  size: PropTypes.oneOf(iconSizes),
}
IconWrap.defaultProps = {
  className: '',
  fill: 'white',
  size: 'm',
}

export default IconWrap
