import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

const BreadcrumbItem = ({ name, url }) => (
  <li className="breadcrumbs__list-Breadcrumbitem font--secondary--xs upper dib">
    <a href={url} className="breadcrumbs__link can-be--white">
      {name}
    </a>
  </li>
)

BreadcrumbItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const Breadcrumbs = ({ items }) =>
  items.length > 0 && (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {renderItems(items, BreadcrumbItem)}
      </ul>
    </nav>
  )

Breadcrumbs.propTypes = {
  items: PropTypes.array,
}
Breadcrumbs.defaultProps = {
  items: [],
}

export default Breadcrumbs
