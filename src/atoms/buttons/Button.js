import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import IconWrap from '../icons/IconWrap'

/**
 *
 * @param {string} base - Base class name
 * @param {string} extra - Extra class name
 * @param {object} flags - Button flags
 */
function getButtonClass(base, extra, { disabled, ...flags }) {
  const classNames = [base]

  if (extra) classNames.push(extra)

  if (disabled) classNames.push('disabled')

  for (const flag in flags) {
    if (flags[flag]) classNames.push(`${base}--${flag}`)
  }

  return classNames.join(' ')
}

/**
 * ALPS atom/buttons/Button component
 * @param {object} props - Button props
 */
function Button({
  as,
  className,
  disabled,
  expand,
  icon,
  iconClass,
  iconSize,
  iconFill,
  lighter,
  onClick,
  outline,
  simple,
  small,
  text,
  toggle,
  url,
  ...rest
}) {
  const buttonClass = getButtonClass('o-button', className, {
    disabled,
    expand,
    lighter,
    outline,
    simple,
    small,
    toggle,
  })

  return (
    <Element
      tag={as}
      className={buttonClass}
      href={onClick ? null : url}
      onClick={onClick}
      {...rest}
    >
      {icon && (
        <IconWrap
          className={iconClass}
          color="white"
          fill={iconFill}
          name={icon}
          size={iconSize}
        />
      )}
      {text}
    </Element>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button', 'span']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expand: PropTypes.bool,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  iconSize: PropTypes.string,
  iconFill: PropTypes.string,
  lighter: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  simple: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string,
  toggle: PropTypes.bool,
  url: PropTypes.string,
}

Button.defaultProps = {
  as: 'button',
  className: '',
  iconFill: 'white',
  iconSize: 'xs',
}

export default Button
