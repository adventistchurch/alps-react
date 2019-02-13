import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'

function IconWrap({ name, size, fill, color, className, ...props }) {
  return (
    <span
      className={`u-icon u-icon--${size} u-path-fill--${fill} ${className}`}
      {...props}
    >
      <Icon name={name} color={color} />
    </span>
  )
}

IconWrap.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.oneOf(['base', 'white']),
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'm']),
}
IconWrap.defaultProps = {
  className: '',
  fill: 'white',
  size: 'm',
}

export default IconWrap
