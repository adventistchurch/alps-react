import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

function Inline({ items }) {
  return (
    <ul className="o-inline-list">
      {renderItems(items, ({ text }) => (
        <li>{text}</li>
      ))}
    </ul>
  )
}

Inline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
}
Inline.defaultProps = {
  items: [],
}

export default Inline
