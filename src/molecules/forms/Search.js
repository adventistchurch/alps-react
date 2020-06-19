import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import TextField from './elements/TextField'
import SubmitButton from './elements/SubmitButton'
import Suggestions from './elements/Suggestions'

const styles = {
  inputWrap: { position: 'relative' },
}

function Search({
  hasFocus,
  onSubmit,
  placeholder,
  submitLabel,
  onSearch,
  suggestions,
  title,
  value,
  ...props
}) {
  return (
    <Form className="search-form" role="search" onSubmit={onSubmit} {...props}>
      <Fieldset legend={title} legendVishidden>
        <div styles={styles.inputWrap}>
          <TextField
            type="search"
            className="search-form__input"
            name="search"
            placeholder={placeholder}
            hasFocus={hasFocus}
            onChange={onSearch}
            value={value}
            required
            autoComplete="off"
          />
          {suggestions && <Suggestions items={suggestions} />}
        </div>

        <SubmitButton
          className="search-form__submit"
          label={submitLabel}
          vishidden
        />
      </Fieldset>
    </Form>
  )
}

Search.propTypes = {
  hasFocus: PropTypes.bool,
  onSearch: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  submitLabel: PropTypes.string,
  suggestions: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.string,
}

Search.defaultProps = {
  submitLabel: 'Search',
  title: 'Search',
  placeholder: 'Search...',
}

export default Search
