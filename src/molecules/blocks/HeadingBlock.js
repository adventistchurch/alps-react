import React from 'react'
import PropTypes from 'prop-types'

import { Div, HeadingThree, Link } from '../../helpers/Element'

export default function HeadingBlock({ linkText, title, url }) {
  return (
    <Div className="c-block__heading" themeBorder="darker">
      <HeadingThree className="c-block__heading-title" themeColor="darker">
        {title}
      </HeadingThree>
      {url && linkText && (
        <Link
          href={url}
          className="c-block__heading-link"
          themeColor="base"
          themeLinkHover="dark"
        >
          {linkText}
        </Link>
      )}
    </Div>
  )
}

HeadingBlock.propTypes = {
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
