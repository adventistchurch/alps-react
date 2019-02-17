import React from 'react'
import PropTypes from 'prop-types'

import useInputFocus from '../../helpers/useInputFocus'

function SearchForm({
  action,
  buttonText,
  hasFocus,
  onSearch,
  placeholder,
  title,
}) {
  const inputFocusRef = useInputFocus(hasFocus)

  return (
    <form
      action={action}
      className="search-form toggled-element"
      method="get"
      onSubmit={onSearch}
      role="search"
    >
      <fieldset>
        <legend className="is-vishidden">{title}</legend>
        <input
          className="search-form__input u-font--secondary--s"
          name="search"
          placeholder={placeholder ? `${placeholder}...` : null}
          ref={inputFocusRef}
          required
          type="search"
        />
        <button className="search-form__submit is-vishidden">
          <span className="is-vishidden">{buttonText}</span>
        </button>
      </fieldset>
    </form>
  )
}

SearchForm.propTypes = {
  action: PropTypes.string,
  buttonText: PropTypes.string,
  hasFocus: PropTypes.bool,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
}

SearchForm.defaultProps = {
  buttonText: 'Search',
  title: 'Search',
  placeholder: 'Search',
}

export default SearchForm
