import React from 'react'
import PropTypes from 'prop-types'

import Kicker from './Kicker'

import { sizes } from '../global/fonts'

function Title({ as, children, color, kicker, kickerColor, size, text }) {
  return React.createElement(
    as,
    { className: `u-font--primary--${size} u-theme--color--${color}` },
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
  text: PropTypes.string,
  size: PropTypes.oneOf(sizes),
}
Title.defaultProps = {
  as: 'h2',
  color: 'darker',
  size: 's',
}

export default Title
