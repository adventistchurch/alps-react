import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import renderItems from '../../helpers/renderItems'

function BreadcrumbItem({ text, url }) {
  return (
    <li className="c-breadcrumbs__list-item u-font--secondary--s u-text-transform--upper u-display--inline-block u-color--gray">
      <span className="u-icon u-icon--xs u-path-fill--gray">
        <Icon name="arrow-bracket-right" />
      </span>
      <strong>
        {url ? (
          <a href={url} className="c-breadcrumbs__link can-be--white">
            {text}
          </a>
        ) : (
          text
        )}
      </strong>
    </li>
  )
}

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
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
