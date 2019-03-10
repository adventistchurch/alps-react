import React from 'react'
import PropTypes from 'prop-types'

import BaseSearch from './elements/BaseSearch'

function SearchHeader({ ...props }) {
  return (
    <BaseSearch
      contentProps={{
        seven: true,
        shiftAt: 'large',
        shiftSide: 'left',
        spacingUntil: 'medium',
      }}
      nestedProps={{
        gridItemSizeAtM: 3,
      }}
      paddingSide={['top', 'bottom']}
      paddingSize="double"
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
