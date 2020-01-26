import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { LI, Link } from '../../helpers/Element'
import renderItems from '../../helpers/renderItems'

function BreadcrumbItem({ text, url }) {
  return (
    <LI
      className="c-breadcrumbs__list-item"
      color="gray"
      display="inline-block"
      fontSize="s"
      fontType="secondary"
      transform="upper"
    >
      <IconWrap name="arrow-bracket-right" size="xs" fill="gray" />
      <strong>
        {url ? (
          <Link className="c-breadcrumbs__link" canBe="white" href={url}>
            {text}
          </Link>
        ) : (
          text
        )}
      </strong>
    </LI>
  )
}

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

function Breadcrumbs({ items }) {
  return (
    items.length > 0 && (
      <nav className="c-breadcrumbs" role="navigation">
        <ul className="c-breadcrumbs__list">
          {renderItems(items, BreadcrumbItem)}
        </ul>
      </nav>
    )
  )
}

Breadcrumbs.propTypes = {
  items: PropTypes.array,
}
Breadcrumbs.defaultProps = {
  items: [],
}

export default Breadcrumbs
