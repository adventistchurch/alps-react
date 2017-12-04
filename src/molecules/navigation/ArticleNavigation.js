import React from 'react'
import PropTypes from 'prop-types'

import Search from '../forms/Search'
import renderItems from '../../helpers/renderItems'

const SubItem = ({ name, url, active }) => (
  <li className="article-nav__subnav__list-item">
    <a
      className={'article-nav__subnav__link' + (active ? ' active' : '')}
      href={url}
    >
      {name}
    </a>
  </li>
)
SubItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

const Item = ({ name, url, active, subitems }) => {
  const hasSubnav = subitems && subitems.length > 0

  let opts = hasSubnav ? { 'data-prefix': 'hover' } : {}

  return (
    <li
      className={`article-nav__list-item dropdown__item ${hasSubnav &&
        'article-nav--with-subnav js-hover'}`}
      {...opts}
    >
      <a
        className={`article-nav__link dropdown__item-link white ${active &&
          ' active'}`}
        href={url}
      >
        {name}
      </a>

      {/* TODO: use a fragment here to wrap the div and the ul */}
      {hasSubnav && (
        <div className="article-nav__subnav__arrow va--middle js-toggle-parent">
          <span className="arrow--down" />
        </div>
      )}
      {hasSubnav && (
        <ul className="article-nav__subnav theme--secondary-background-color">
          {renderItems(subitems, SubItem)}
        </ul>
      )}
    </li>
  )
}
Item.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
  subitems: PropTypes.array,
}
Item.defaultProps = {
  active: false,
  subitems: [],
}

const ArticleNavigation = ({ items, dropdown }) => (
  <nav
    id="article-nav"
    className="article-nav theme--secondary-background-color toggled-element"
    data-active-target="article-nav"
  >
    <div className="layout-container">
      <div className="article-nav__inner">
        <div className="dropdown">
          <div className="dropdown__label font--secondary--s upper js-toggle-parent white">
            {dropdown.label}{' '}
            <span className="dropdown__arrow dib arrow--down border-top--white va--middle" />
          </div>
          <ul className="article-nav__list dropdown__options theme--secondary-background-color">
            {renderItems(items, Item)}
          </ul>
        </div>
        <div className="article-nav__search cf">
          <Search />
        </div>
      </div>
    </div>
  </nav>
)

ArticleNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  dropdown: PropTypes.object,
}
ArticleNavigation.defaultProps = {
  items: [],
  dropdown: { label: 'Menu' },
}

export default ArticleNavigation
