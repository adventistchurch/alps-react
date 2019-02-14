import React from 'react'
import PropTypes from 'prop-types'

function HeadingBlock({ title }) {
  return (
    <div className="c-block__heading u-theme--border-color--darker">
      <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
    </div>
  )
}

HeadingBlock.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeadingBlock
