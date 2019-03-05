import React from 'react'
import PropTypes from 'prop-types'

import { getSvgFillClass, svgFillColors } from '../../atoms/global/colors'

import library from './library/index'

// Available icons sizes
const iconSizes = ['xs', 's', 'm', 'l', 'xl']

// Available icon names
const iconNames = Object.keys(library)

function Icon({ name, color, fill }) {
  const NamedIcon = library[name]
  const className = color ? getSvgFillClass(color) : null

  return NamedIcon ? (
    <NamedIcon className={className} fill={fill} title={name} />
  ) : (
    `[${name}]`
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf(svgFillColors),
  fill: PropTypes.string,
}

Icon.defaultProps = {
  name: 'logo',
  fill: '#9b9b9b',
}

export { iconNames, iconSizes }

export default Icon
