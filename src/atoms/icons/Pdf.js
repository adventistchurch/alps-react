import React from 'react'
import PropTypes from 'prop-types'

import File from './File'

const PdfIcon = ({ fill }) => <File text="PDF" fill={fill} />

PdfIcon.propTypes = {
  fill: PropTypes.string,
}

export default PdfIcon
