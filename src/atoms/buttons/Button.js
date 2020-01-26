import React from 'react'
import PropTypes from 'prop-types'

import Element, { Link } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'
import IconWrap from '../icons/IconWrap'

export const iconAsElements = ['a', 'button', 'span']
export const iconPositions = ['left', 'right']

// TODO: ask if this can be added to ALPS (maybe with something like `.o-button--icon-right`)
const fixRightIcon = { marginLeft: '.3125rem', marginRight: '0' }

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
  href,
  icon,
  iconFill,
  iconPosition,
  iconProps,
  iconSize,
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
  const { openClass, onToggle } = useToggle(false)

  const buttonClass = getButtonClass('o-button', className, {
    disabled,
    expand,
    lighter,
    outline,
    simple,
    small,
    toggle,
  })

  function _onClick(event) {
    if (onClick) onClick(event)
    if (toggle) onToggle()
  }

  const link = url || href

  const TheButton = link && !onClick ? Link : Element

  const iconElem = icon ? (
    <IconWrap
      color="white"
      fill={iconFill}
      name={icon}
      size={iconSize}
      style={iconPosition === 'right' ? fixRightIcon : null}
      {...iconProps}
    />
  ) : null

  return (
    <TheButton
      tag={as}
      className={`${buttonClass} ${openClass}`}
      href={onClick ? null : link}
      onClick={onClick || toggle ? _onClick : null}
      {...rest}
    >
      {iconPosition === 'left' && iconElem}
      {text}
      {iconPosition === 'right' && iconElem}
    </TheButton>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(iconAsElements),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expand: PropTypes.bool,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.string,
  iconFill: PropTypes.string,
  iconPosition: PropTypes.oneOf(iconPositions),
  iconProps: PropTypes.object,
  iconSize: PropTypes.string,
  lighter: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  simple: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string,
  toggle: PropTypes.bool,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Button.defaultProps = {
  as: 'button',
  iconFill: 'white',
  iconPosition: 'left',
  iconSize: 'xs',
}

export default Button
