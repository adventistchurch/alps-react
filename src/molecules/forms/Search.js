import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import SearchField from './elements/SearchField'
import SubmitButton from './elements/SubmitButton'

function Search({ submitLabel, hasFocus, placeholder, title, ...props }) {
  return (
    <Form className="search-form" role="search" {...props}>
      <Fieldset legend={title} legendVishidden>
        <SearchField
          className="search-form__input"
          name="search"
          placeholder={placeholder}
          hasFocus={hasFocus}
          required
        />
        {/* TODO: create component for screen readers? */}
        <SubmitButton className="search-form__submit" label={submitLabel} />
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
  placeholder: 'Search...',
}

export default Search
