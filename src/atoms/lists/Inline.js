import React from 'react'
import PropTypes from 'prop-types'

export default function Inline({ items }) {
  return (
    <ul className="o-inline-list">
      {Array.isArray(items) &&
        items.map(({ text }, i) => (
          <li key={`inline-list-item-${i}`}>{text}</li>
        ))}
    </ul>
  )
}

Inline.propTypes = {
  /**
   * Items to display
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
}
