import React from 'react'
import PropTypes from 'prop-types'

function HeadingBlock({ title, linkText, url }) {
  return (
    <div className="c-block__heading u-theme--border-color--darker">
      <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
      {url && linkText && (
        <a
          href={url}
          className="c-block__heading-link u-theme--color--base u-theme--link-hover--dark"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}

HeadingBlock.propTypes = {
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default HeadingBlock
