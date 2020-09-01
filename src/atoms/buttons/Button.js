import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Element, { Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import useToggle from '../../helpers/useToggle'
import IconWrap, { iconSizes, iconNames } from '../icons/IconWrap'

export const asOptions = ['a', 'button', 'span']
export const iconPositions = ['left', 'right']

// TODO: ask if this can be added to ALPS (maybe with something like `.o-button--icon-right`)
const fixRightIcon = { marginLeft: '.3125rem', marginRight: '0' }

/**
 * Returns classes for a button depending the provided flags
 * @param {string} base Base class name
 * @param {object} flags Button flags
 * @param {object} extras Extra class(es) name(s)
 * @returns `string`
 */
function useButtonClass(base, { disabled, ...flags }, extras) {
  return useClasses(
    base,
    {
      ...Object.keys(flags).reduce((acc, flag) => {
        if (flags[flag]) acc[`${base}--${flag}`] = flags[flag]
        return acc
      }, {}),
      disabled,
    },
    extras
  )
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

  const buttonClass = useButtonClass(
    'o-button',
    {
      disabled,
      expand,
      lighter,
      outline,
      simple,
      small,
      toggle,
    },
    `${className} ${openClass}`
  )

  const _onClick = useCallback(
    event => {
      if (onClick) onClick(event)
      if (toggle) onToggle()
    },
    [onClick, onToggle, toggle]
  )

  const link = onClick ? null : url || href

  const TheButton = link ? Link : Element

  const iconElem = icon && (
    <IconWrap
      color="white"
      name={icon}
      size={iconSize}
      style={iconPosition === 'right' ? fixRightIcon : null}
      {...iconProps}
    />
  )

  return (
    <TheButton
      tag={as}
      className={`${buttonClass} ${openClass}`}
      href={link}
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
  /**
   * Sets the html element used to render the button
   */
  as: PropTypes.oneOf(asOptions),
  /**
   * Allows passing extra classes to button's wrapper
   */
  className: PropTypes.string,
  /**
   * Flags button as diabled
   */
  disabled: PropTypes.bool,
  /**
   * TODO: is this required?
   */
  expand: PropTypes.bool,
  /**
   * URL to navigate when button is pressed. It can be a regular `string` URL, or an `object` with metadata (like Links in Next.js).
   */
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Icon to be displayed (requires `iconPosition`)
   */
  icon: PropTypes.oneOf(iconNames),
  /**
   * Defines icon positioning (relative to `text`)
   */
  iconPosition: PropTypes.oneOf(iconPositions),
  /**
   * Provides extra props to the icon element
   */
  iconProps: PropTypes.object,
  /**
   * Set icon's size
   */
  iconSize: PropTypes.oneOf(iconSizes),
  /**
   * Makes button look lighter
   */
  lighter: PropTypes.bool,
  /**
   * Handles `onclick` event
   */
  onClick: PropTypes.func,
  /**
   * Removes button's background
   */
  outline: PropTypes.bool,
  /**
   * Removes button's border and background
   */
  simple: PropTypes.bool,
  /**
   * Makes button look smaller
   */
  small: PropTypes.bool,
  /**
   * Sets button label
   */
  text: PropTypes.string,
  /**
   * TODO: is this required?
   */
  toggle: PropTypes.bool,
  /**
   * An `href` alias
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Button.defaultProps = {
  as: 'button',
  className: '',
}

export default Button
