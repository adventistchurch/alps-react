import React from 'react'
import PropTypes from 'prop-types'

import BaseSearch from './elements/BaseSearch'

function SearchHeader({ ...props }) {
  return (
    <BaseSearch
      className="u-padding--double--top u-padding--double--bottom"
      contentWrapperClass="l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium"
      contentWrapperNestedClass="l-grid-item l-grid-item--m--3-col"
      {...props}
    />
  )
}

SearchHeader.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
}
SearchHeader.defaultProps = {
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
  showSearchAgain: true,
}

export default SearchHeader
