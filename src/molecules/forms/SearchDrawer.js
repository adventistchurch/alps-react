import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import Suggestions from '../components/Suggestions'
import Form from './elements/Form'
import TextField from './elements/TextField'

export default function Search({
  clearLabel,
  filters,
  filtersLabel,
  hasFocus,
  name,
  onSearch,
  onSubmit,
  placeholder,
  suggestions,
  term,
  ...props
}) {
  const [showSuggestions, setShowSuggestions] = useState()

  const onTermChange = useCallback(
    e => {
      const term = e.target.value || ''
      setShowSuggestions(term.length > 0)

      if (typeof onSearch === 'function') onSearch(e)
    },
    [onSearch]
  )

  return (
    <div className="c-search-drawer u-theme--dark u-theme--background-color--darker">
      <div className="c-search-drawer__filter c-filter">
        <Form
          className="c-filter__search"
          role="search"
          onSubmit={onSubmit}
          {...props}
        >
          <div className="c-filter__inline">
            <TextField
              id="drawer-search-input"
              type="search"
              className="u-font--secondary--s u-theme--color--darker can-be--white"
              name={name}
              placeholder={placeholder}
              hasFocus={hasFocus}
              onChange={onTermChange}
              value={term}
              required
              autoComplete="off"
            />

            <button className="o-button o-button--simple can-be--white">
              <font>{clearLabel}</font>
            </button>
          </div>

          {filters && (
            <button
              className="c-filter__toggle js-toggle o-button o-button--simple--gray"
              data-toggled="c-filter"
              data-prefix="c-filter"
            >
              <span className="u-icon u-icon--xs u-theme--path-fill--base">
                <Icon name="settings" />
              </span>
              <font>{filtersLabel}</font>
            </button>
          )}
        </Form>
        {filters}
      </div>

      {suggestions && (
        <Suggestions {...suggestions} visible={showSuggestions} />
      )}
    </div>
  )
}

Search.propTypes = {
  clearLabel: PropTypes.string,
  hasFocus: PropTypes.bool,
  name: PropTypes.string,
  filters: PropTypes.node,
  filtersLabel: PropTypes.string,
  onSearch: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  suggestions: PropTypes.shape({
    items: PropTypes.array,
    itemsTitle: PropTypes.string,
    otherItems: PropTypes.array,
    otherTitle: PropTypes.string,
  }),
  term: PropTypes.string,
}

Search.defaultProps = {
  clearLabel: 'Clear search',
  name: 'search',
  placeholder: 'Search...',
}
