import React from 'react'
import PropTypes from 'prop-types'

import BaseSearch from './elements/BaseSearch'

const contentProps = {
  className: 'l-field-container',
  spacing: true,
}

function SearchFilter(props) {
  return (
    <BaseSearch
      borderSide="left"
      contentProps={contentProps}
      padding
      spacing
      themeBorder="darker"
      {...props}
    />
  )
}

SearchFilter.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
}
SearchFilter.defaultProps = {
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
}

export default SearchFilter
