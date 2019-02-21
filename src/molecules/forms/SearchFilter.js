import React from 'react'
import PropTypes from 'prop-types'

import BaseSearch from './BaseSearch'

function SearchFilter({ ...props }) {
  return (
    <BaseSearch
      border="left"
      className="u-spacing u-padding"
      contentWrapperClass="l-field-container u-spacing"
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
