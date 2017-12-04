import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const MagnifyIcon = ({ fill }) => (
  <Svg
    title="Magnify"
    viewBox="0 0 500 500"
    className={fill}
    //enableBackground="new 0 0 500 500"
  >
    <path
      className={fill}
      d="M485 420.3L367.3 302.6c17.7-29.2 28-63.4 28-100C395.2 96.2 303 4 196.6 4 90.2 4 4 90.2 4 196.6s92.2 198.6 198.6 198.6c35.4 0 68.5-9.6 97-26.2l118.3 118.3c11.6 11.6 30.4 11.6 41.9 0l29.4-29.3c11.5-11.6 7.3-26.2-4.2-37.7zM63.3 196.6C63.3 123 123 63.3 196.6 63.3c73.7 0 139.3 65.6 139.3 139.3 0 73.7-59.7 133.4-133.4 133.4-73.6 0-139.2-65.7-139.2-139.4z"
    />
  </Svg>
)

MagnifyIcon.propTypes = {
  fill: PropTypes.string,
}

export default MagnifyIcon
