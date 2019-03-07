import React from 'react'
import PropTypes from 'prop-types'

import { svgFillColors, themeColors } from '../../atoms/global/colors'
import library from './library/index'

// Available icon names
export const iconNames = Object.keys(library)

export default function Icon({ name, color, fill, themeColor }) {
  const IconComponent = library[name]

  return IconComponent ? (
    <IconComponent
      fill={fill}
      title={name}
      pathFill={color}
      themePathFill={themeColor}
    />
  ) : (
    `[${name}]`
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf(svgFillColors),
  themeColor: PropTypes.oneOf(themeColors),
  fill: PropTypes.string,
}
Icon.defaultProps = {
  name: 'logo',
  fill: '#9b9b9b',
}
