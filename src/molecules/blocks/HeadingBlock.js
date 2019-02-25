import React from 'react'
import PropTypes from 'prop-types'

import Element, { sides, sizes } from '../../helpers/Element'

function HeadingBlock({ linkText, spaceSide, spaceSize, title, url }) {
  return (
    <Element
      className="c-block__heading u-theme--border-color--darker"
      spaceSide={spaceSide}
      spaceSize={spaceSize}
      tag="div"
    >
      <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
      {url && linkText && (
        <a
          href={url}
          className="c-block__heading-link u-theme--color--base u-theme--link-hover--dark"
        >
          {linkText}
        </a>
      )}
    </Element>
  )
}

HeadingBlock.propTypes = {
  linkText: PropTypes.string,
  spaceSide: PropTypes.oneOf(sides),
  spaceSize: PropTypes.oneOf(sizes),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default HeadingBlock
