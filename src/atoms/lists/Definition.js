import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import renderItems from '../../helpers/renderItems'

function Definition({ items }) {
  return (
    <dl>
      {renderItems(items, ({ text, title }) => (
        <>
          <Element as="dt" paddingSide="top">
            {title}
          </Element>
          <Element as="dd" paddingSide="bottom">
            {text}
          </Element>
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
