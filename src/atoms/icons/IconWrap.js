import React from 'react'
import PropTypes from 'prop-types'

import {
  svgFillClass,
  svgFillColors,
  themeBackgroundClass,
  themeBackgroundColors,
} from '../../atoms/global/colors'

import Icon, { iconSizes } from '../../atoms/icons/Icon'
import Element from '../../helpers/Element'

function IconWrap({
  as,
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
    <Element as={as} className={classNames} {...props}>
      <Icon name={name} color={color} />
    </Element>
  )
}

IconWrap.propTypes = {
  as: PropTypes.string,
  background: PropTypes.oneOf(themeBackgroundColors),
  className: PropTypes.string,
  color: Icon.propTypes.color,
  fill: PropTypes.oneOf(svgFillColors),
  name: Icon.propTypes.name,
  size: PropTypes.oneOf(iconSizes),
}
IconWrap.defaultProps = {
  as: 'span',
  className: '',
  fill: 'white',
  size: 'm',
}

export default IconWrap
