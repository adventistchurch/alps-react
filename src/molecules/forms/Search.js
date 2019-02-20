import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './Fieldset'
import Form from './Form'

import useInputFocus from '../../helpers/useInputFocus'

function Search({ submitLabel, hasFocus, placeholder, title, ...props }) {
  const inputFocusRef = useInputFocus(hasFocus)

  return (
    <Form className="search-form" role="search" {...props}>
      <Fieldset legend={title} legendClass="is-vishidden">
        <input
          className="search-form__input u-font--secondary--s"
          name="search"
          placeholder={placeholder ? `${placeholder}...` : null}
          ref={inputFocusRef}
          required
          type="search"
        />
        <button className="search-form__submit is-vishidden">
          <span className="is-vishidden">{submitLabel}</span>
        </button>
      </Fieldset>
    </Form>
  )
}

Search.propTypes = {
  hasFocus: PropTypes.bool,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
}

Search.defaultProps = {
  submitLabel: 'Search',
  title: 'Search',
  placeholder: 'Search',
}

export default Search
