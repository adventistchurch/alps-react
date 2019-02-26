import React from 'react'
import PropTypes from 'prop-types'

import {
  svgFillClass,
  svgFillColors,
  themeBackgroundClass,
  themeBackgroundColors,
} from '../../atoms/global/colors'

import Icon, { iconSizes } from '../../atoms/icons/Icon'

function IconWrap({
  background,
  className,
  color,
  fill,
  name,
  size,
  ...props
}) {
  const classes = ['u-icon', ` u-icon--${size}`]

  if (className) classes.push(className)
  if (background) classes.push(`${themeBackgroundClass}--${background}`)
  if (fill) classes.push(`${svgFillClass}--${fill}`)

  const classNames = classes.join(' ')

  return (
    <span className={classNames} {...props}>
      <Icon name={name} color={color} />
    </span>
  )
}

IconWrap.propTypes = {
  background: PropTypes.oneOf(themeBackgroundColors),
  className: PropTypes.string,
  color: Icon.propTypes.color,
  fill: PropTypes.oneOf(svgFillColors),
  name: Icon.propTypes.name,
  size: PropTypes.oneOf(iconSizes),
}
IconWrap.defaultProps = {
  className: '',
  fill: 'white',
  size: 'm',
}

export default IconWrap
