import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../icons/IconWrap'

/**
 *
 * @param {string} base - Base class name
 * @param {string} extra - Extra class name
 * @param {object} flags - Button flags
 */
function getButtonClass(base, extra, { disabled, ...flags }) {
  const classNames = [base, extra]

  if (disabled) classNames.push(disabled)

  for (const flag in flags) {
    if (flags[flag]) classNames.push(`${base}--${flag}`)
  }

  return classNames.join(' ')
}

function Button({
  as,
  text,
  url,
  icon,
  iconClass,
  iconSize,
  iconFill,
  className,
  small,
  outline,
  lighter,
  toggle,
  simple,
  disabled,
  ...rest
}) {
  return React.createElement(
    as,
    {
      href: url,
      className: getButtonClass('o-button', className, {
        small,
        outline,
        toggle,
        lighter,
        simple,
        disabled,
      }),
      ...rest,
    },
    <>
      {icon && (
        <IconWrap
          name={icon}
          className={iconClass}
          size={iconSize}
          fill={iconFill}
          color="white"
        />
      )}
      {text}
    </>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button']),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  iconSize: PropTypes.string,
  iconFill: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  small: PropTypes.bool,
  outline: PropTypes.bool,
  lighter: PropTypes.bool,
  toggle: PropTypes.bool,
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  className: '',
  as: 'button',
  iconSize: 'xs',
  iconFill: 'base',
  url: '#',
}

export default Button
