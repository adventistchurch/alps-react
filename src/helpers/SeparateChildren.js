import React from 'react'
import PropTypes from 'prop-types'

const SeparateChildren = ({ children, separator, testProp }) => {
  const items = children.filter(child => child.props[testProp])

  return React.Children.map(items, (child, i) => {
    const isLastChild = i === items.length - 1
    return [child, isLastChild ? null : separator]
  })
}

SeparateChildren.propTypes = {
  children: PropTypes.node,
  separator: PropTypes.node,
  testProp: PropTypes.string,
}
SeparateChildren.defaultProps = {
  testProp: 'children',
}

export default SeparateChildren
