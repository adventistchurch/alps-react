import React from 'react'
import PropTypes from 'prop-types'

function SearchForm({ action, buttonText, placeholder, title }) {
  return (
    <form
      action={action}
      role="search"
      method="get"
      className="search-form toggled-element"
    >
      <fieldset>
        <legend className="is-vishidden">{title}</legend>
        <input
          type="search"
          name="search"
          placeholder={placeholder ? placeholder + '...' : ''}
          className="search-form__input u-font--secondary--s"
          required
        />
        <button className="search-form__submit is-vishidden">
          <span className="is-vishidden">{buttonText}</span>
        </button>
      </fieldset>
    </form>
  )
}

SearchForm.propTypes = {
  action: PropTypes.string.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
}

SearchForm.defaultProps = {
  title: 'Search',
  buttonText: 'Search',
  placeholder: 'Search',
}

export default SearchForm
