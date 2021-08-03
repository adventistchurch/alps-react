import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import TextField from './elements/TextField'
import SubmitButton from './elements/SubmitButton'
import Suggestions from '../components/Suggestions'

const styles = {
  inputWrap: { position: 'relative' },
}

function Search({
  term,
  hasFocus,
  onSubmit,
  placeholder,
  submitLabel,
  onSearch,
  suggestions,
  title,
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
    <Form className="search-form" role="search" onSubmit={onSubmit} {...props}>
      <Fieldset legend={title} legendVishidden>
        <div style={styles.inputWrap}>
          <TextField
            type="search"
            className="search-form__input"
            name="search"
            placeholder={placeholder}
            hasFocus={hasFocus}
            onChange={onTermChange}
            value={term}
            required
            autoComplete="off"
          />
          {suggestions && (
            <Suggestions {...suggestions} visible={showSuggestions} />
          )}
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
  suggestions: PropTypes.shape({
    items: PropTypes.array,
    itemsTitle: PropTypes.string,
    otherItems: PropTypes.array,
    otherTitle: PropTypes.string,
  }),
  term: PropTypes.string,
  title: PropTypes.string,
}

Search.defaultProps = {
  submitLabel: 'Search',
  title: 'Search',
  placeholder: 'Search...',
}

export default Search
