import React from 'react'
import PropTypes from 'prop-types'

import File from './File'

const DocIcon = ({ fill }) => <File text="DOC" fill={fill} />

DocIcon.propTypes = {
  fill: PropTypes.string,
}

export default DocIcon
