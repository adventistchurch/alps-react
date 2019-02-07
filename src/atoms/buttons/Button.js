import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../icons/IconWrap'

const Button = ({
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

  return React.createElement(
    as,
    { href: url ? url : '#', className: classNames, ...rest },
    <>
      {text}{' '}
      {icon && (
        <IconWrap
          name={icon}
          className={iconClass}
          size={iconSize}
          fill={iconFill}
          iconColor="white"
        />
      )}
    </>
  )

  // return (
  //   <a {...rest} href={url ? url : '#'} className={classNames}>
  //     {text}{' '}
  //     {icon && (
  //       <IconWrap
  //         name={icon}
  //         className={iconClass}
  //         size={iconSize}
  //         fill={iconFill}
  //         iconColor="white"
  //       />
  //     )}
  //   </a>
  // )
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
  as: 'button',
  iconSize: 'm',
  iconFill: 'base',
  url: '#',
}

export default Button
