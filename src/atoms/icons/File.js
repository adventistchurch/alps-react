import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const FileIcon = ({ text, fill }) => (
  <Svg title={`${text} Icon`} viewBox="0 0 130 130" className={fill}>
    <g fillRule="evenodd">
      <path d="M88,1 C88,0.44771525 87.5522847,0 87,0 L17,0 C16.4477153,0 16,0.44771525 16,1 L16,128 C16,128.552285 16.4477153,129 17,129 L114,129 C114.552285,129 115,128.552285 115,128 L115,100 C115,99.4477153 114.552285,99 114,99 L53,99 C52.4477153,99 52,98.5522847 52,98 L52,70 C52,69.4477153 52.4477153,69 53,69 L114,69 C114.552285,69 115,68.5522847 115,68 L115,28 C115,27.4477153 114.552285,27 114,27 L89,27 C88.4477153,27 88,26.5522847 88,26 L88,1 Z" />
      <text fontFamily="Arial" fontSize="15" fontWeight="bold">
        <tspan x="61" y="90">
          {text}
        </tspan>
      </text>
      <polygon fillRule="nonzero" points="91 24 115 24 91 0" />
    </g>
  </Svg>
)

FileIcon.propTypes = {
  text: PropTypes.string.isRequired,
  fill: PropTypes.string,
}

export default FileIcon
