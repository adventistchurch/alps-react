import React from 'react'
import PropTypes from 'prop-types'

import Element, { HeadingThree, Link } from '../../helpers/Element'

function HeadingBlock({ linkText, title, url }) {
  return (
    <Element className="c-block__heading" themeBorder="darker">
      <HeadingThree className="c-block__heading-title" themeColor="darker">
        {title}
      </HeadingThree>
      {url && linkText && (
        <Link
          href={url}
          className="c-block__heading-link u-theme--link-hover--dark"
          themeColor="base"
          themeLinkHover="dark"
        >
          {linkText}
        </Link>
      )}
    </Element>
  )
}

HeadingBlock.propTypes = {
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  ...Element.propTypes,
}

export default HeadingBlock
