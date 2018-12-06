import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../icons/IconWrap'

const Button = ({
  text,
  url,
  icon,
  iconClass,
  className,
  small,
  outline,
  lighter,
  toggle,
  simple,
  disabled,
  ...rest
}) => {
  const baseClass = 'o-button'

  const classNames = `${baseClass}
    ${className}
    ${small ? `${baseClass}--small` : ''}
    ${outline ? `${baseClass}--outline` : ''} 
    ${toggle ? `${baseClass}--toggle` : ''} 
    ${lighter ? `${baseClass}--lighter` : ''} 
    ${simple ? `${baseClass}--simple` : ''} 
    ${disabled ? 'disabled' : ''}`

  return (
    <a {...rest} href={url ? url : '#'} className={classNames}>
      {text}{' '}
      {icon && (
        <IconWrap
          name={icon}
          className={iconClass}
          size="xs"
          fill="white"
          iconColor="white"
        />
      )}
    </a>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
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
  className: 'u-theme--button',
  iconClass: 'u-icon--xs u-path-fill--white',
  url: '#',
}

export default Button
