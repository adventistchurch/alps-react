import React from 'react'
import PropTypes from 'prop-types'

function Element({ as, children, tag, ...props }) {
  return React.createElement(tag ? tag : as, props, children)
}

Element.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
}
Element.defaultProps = {
  as: 'div',
}

export default Element
