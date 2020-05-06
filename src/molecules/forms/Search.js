import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import TextField from './elements/TextField'
import SubmitButton from './elements/SubmitButton'

function Search({
  hasFocus,
  onSearch,
  placeholder,
  submitLabel,
  title,
  ...props
}) {
  return (
    <Form className="search-form" role="search" onSubmit={onSearch} {...props}>
      <Fieldset legend={title} legendVishidden>
        <TextField
          type="search"
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
  onSearch: PropTypes.func,
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
