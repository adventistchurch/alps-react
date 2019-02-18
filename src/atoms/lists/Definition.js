import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

function Definition({ items }) {
  return (
    <dl>
      {renderItems(items, ({ text, title }) => (
        <>
          <dt className="u-padding--top">{title}</dt>
          <dd className="u-padding--bottom">{text}</dd>
        </>
      ))}
    </dl>
  )
}

Definition.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}
Definition.defaultProps = {
  items: [],
}

export default Definition
