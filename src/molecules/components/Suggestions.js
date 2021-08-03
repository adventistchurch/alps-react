import React from 'react'
import PropTypes from 'prop-types'

function SuggestionsList({ title, items }) {
  return (
    <div className="c-suggestions__main u-spacing--quarter">
      <h4 className="c-suggestions__heading u-font--secondary--xs u-text-transform--upper u-color--gray can-be--lighter">
        {title} ({items.length})
      </h4>
      <ul
        className="c-suggestions__list u-spacing--quarter"
        data-context="search-other-suggestions"
      >
        {items?.map(({ text, href, onClick, key }) => (
          <li key={key}>
            <a
              className="u-theme--color--darker can-be--white"
              onClick={onClick}
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
SuggestionsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}
SuggestionsList.defaultProps = {
  items: [],
}

export default function Suggestions({
  items,
  itemsTitle,
  otherItems,
  otherTitle,
  visible,
}) {
  return (
    <div
      className="c-suggestions u-border--bottom u-theme--border-color--darker--bottom u-spacing can-be--dark u-padding--bottom"
      data-context="search-main-suggestions"
      style={{ display: visible ? 'block' : 'none' }}
    >
      <SuggestionsList items={items} title={itemsTitle} />
      {otherItems?.length > 0 && (
        <SuggestionsList items={otherItems} title={otherTitle} />
      )}
    </div>
  )
}

Suggestions.propTypes = {
  items: PropTypes.array,
  itemsTitle: PropTypes.string,
  otherItems: PropTypes.array,
  otherTitle: PropTypes.string,
  visible: PropTypes.bool,
}
Suggestions.defaultProps = {
  itemsTitle: 'This site',
  otherTitle: 'Other sites',
}
