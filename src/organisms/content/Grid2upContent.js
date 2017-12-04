import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

const GridItem = ({ hasHr, padBottom, ...item }) => (
  <div className={`gi ${padBottom ? 'pad-double--btm' : ''}`}>
    <div className="spacing">
      <div className="pad">{item}</div>
      {hasHr && <hr />}
    </div>
  </div>
)
GridItem.propTypes = {
  hasHr: PropTypes.bool,
  padBottom: PropTypes.bool,
}

const Grid2upContent = ({ items, hasHr, padBottom }) => {
  return (
    <div className="g g-2up--at-medium with-divider">
      {renderItems(items, GridItem, { hasHr, padBottom })}
    </div>
  )
}

Grid2upContent.propTypes = {
  items: PropTypes.array,
  hasHr: PropTypes.bool,
  padBottom: PropTypes.bool,
}
Grid2upContent.defaultProps = {
  items: [],
  hasHr: true,
  padBottom: false,
}

export default Grid2upContent
