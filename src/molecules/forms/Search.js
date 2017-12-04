import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ placeholder }) => {
  return (
    <form
      action=""
      role="search"
      method="get"
      className="search-form toggled-element"
    >
      <fieldset>
        <legend className="is-vishidden">Search</legend>
        <input
          type="search"
          name="s"
          placeholder={placeholder ? placeholder + '...' : ''}
          className="search-form__input font--secondary--s"
          required
        />
        <button className="search-form__submit is-vishidden">
          <span className="is-vishidden">Submit</span>
        </button>
      </fieldset>
    </form>
  )
}

SearchForm.propTypes = {
  placeholder: PropTypes.string,
}

export default SearchForm
