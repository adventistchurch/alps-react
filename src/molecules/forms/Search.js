import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import SearchField from './elements/SearchField'

import useInputFocus from '../../helpers/useInputFocus'

function Search({ submitLabel, hasFocus, placeholder, title, ...props }) {
  const inputFocusRef = useInputFocus(hasFocus)

  // Remove from the flow but leave available to screen readers
  const screenReaderClass = 'is-vishidden'

  return (
    <Form className="search-form" role="search" {...props}>
      <Fieldset legend={title} legendClass={screenReaderClass}>
        <SearchField
          className="search-form__input"
          name="search"
          placeholder={placeholder}
          ref={inputFocusRef}
          required
        />
        {/* TODO: create component for screen readers? */}
        <button className={`search-form__submit ${screenReaderClass}`}>
          <span className={screenReaderClass}>{submitLabel}</span>
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
}

export default Search
