import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import Kicker from './Kicker'

export default function Title({
  children,
  kicker,
  kickerColor,
  text,
  ...props
}) {
  return (
    <Element {...props}>
      {kicker && <Kicker text={kicker} color={kickerColor} />}{' '}
      {text || children}
    </Element>
  )
}

Title.propTypes = {
  /**
   * Sets the tag element used in as wrapping element.
   */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Sets content as children (prevails over `text` prop).
   */
  children: PropTypes.node,
  /**
   * Sets kicker text
   */
  kicker: PropTypes.string,
  /**
   * Defines kicker color (based on theme).
   */
  kickerColor: PropTypes.oneOf(['base', 'dark']),
  /**
   * Sets text content.
   */
  text: PropTypes.string,
  ...Element.propTypes,
}
Title.defaultProps = {
  as: 'h2',
  fontSize: 's',
  fontType: 'primary',
  themeColor: 'darker',
}
