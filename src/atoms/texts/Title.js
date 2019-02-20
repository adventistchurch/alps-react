import React from 'react'
import PropTypes from 'prop-types'

import Kicker from './Kicker'

import { sizes } from '../global/fonts'

function Title({
  as,
  children,
  color,
  kicker,
  kickerColor,
  size,
  strong,
  text,
  type,
  uppercase,
}) {
  const titleClass = `u-font--${type}--${size} u-theme--color--${color} ${
    strong ? 'u-text--strong' : ''
  } ${uppercase ? 'u-text-transform--upper' : ''}`
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
  color: PropTypes.oneOf(['base', 'darker']),
  children: PropTypes.node,
  kicker: PropTypes.string,
  kickerColor: Kicker.propTypes.color,
  size: PropTypes.oneOf(sizes),
  strong: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  uppercase: PropTypes.bool,
}
Title.defaultProps = {
  as: 'h2',
  color: 'darker',
  size: 's',
  type: 'primary',
}

export default Title
