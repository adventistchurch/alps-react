import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ShareIcon = ({ fill }) => (
  <Svg title="Share" viewBox="0 0 20 20" title="o-icon__share" className={fill}>
    <path d="M14.21,6.21,7,9.8c0,.06,0,.13,0,.2s0,.13,0,.2l7.17,3.58a3.46,3.46,0,0,1,2.26-.84,3.53,3.53,0,1,1-3.53,3.53c0-.07,0-.14,0-.2L5.8,12.68a3.53,3.53,0,1,1,0-5.37L13,3.73c0-.07,0-.13,0-.2a3.53,3.53,0,1,1,3.53,3.53A3.47,3.47,0,0,1,14.21,6.21Z"/>
  </Svg>
)

ShareIcon.propTypes = {
  fill: PropTypes.string,
}

export default ShareIcon
