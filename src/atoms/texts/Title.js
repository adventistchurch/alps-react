import React from 'react'
import PropTypes from 'prop-types'

import Kicker from './Kicker'

import { sizes } from '../global/fonts'

function Title({
  as,
  children,
  className,
  color,
  kicker,
  kickerColor,
  size,
  strong,
  text,
  transform,
  type,
}) {
  const titleClass = `u-font--${type}--${size} u-theme--color--${color} ${
    strong ? 'u-text--strong' : ''
  } ${transform ? `u-text-transform--${transform}` : ''} ${className}`
  return React.createElement(
    as,
    { className: titleClass },
    <>
      {kicker && <Kicker text={kicker} color={kickerColor} />}{' '}
      {text || children}
    </>
  )
}

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['base', 'darker']),
  children: PropTypes.node,
  kicker: PropTypes.string,
  kickerColor: Kicker.propTypes.color,
  size: PropTypes.oneOf(sizes),
  strong: PropTypes.bool,
  text: PropTypes.string,
  transform: PropTypes.oneOf(['upper', 'lower']),
  type: PropTypes.oneOf(['primary', 'secondary']),
}
Title.defaultProps = {
  as: 'h2',
  className: '',
  color: 'darker',
  size: 's',
  type: 'primary',
}

export default Title
