import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import Kicker from './Kicker'

function Title({
  as,
  children,
  className,
  kicker,
  kickerColor,
  text,
  ...props
}) {
  return (
    <Element tag={as} className={className} {...props}>
      {kicker && <Kicker text={kicker} color={kickerColor} />}{' '}
      {text || children}
    </Element>
  )
}

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  children: PropTypes.node,
  kicker: PropTypes.string,
  kickerColor: Kicker.propTypes.color,
  text: PropTypes.string,
  ...Element.propTypes,
}
Title.defaultProps = {
  as: 'h2',
  className: '',
  themeColor: 'darker',
  fontSize: 's',
  fontType: 'primary',
}

export default Title
