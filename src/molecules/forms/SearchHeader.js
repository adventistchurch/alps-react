import React from 'react'
import PropTypes from 'prop-types'

import BaseSearch from './elements/BaseSearch'

const baseProps = {
  contentProps: {
    seven: true,
    shiftLeftAt: 'medium',
  },
  nestedProps: {
    gridItemSizeAtM: 3,
  },
  paddingTop: 'double',
  paddingBottom: 'double',
}

export default function SearchHeader(props) {
  return <BaseSearch {...baseProps} {...props} />
}

SearchHeader.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
  suggestions: PropTypes.shape({
    items: PropTypes.array,
    itemsTitle: PropTypes.string,
    otherItems: PropTypes.array,
    otherTitle: PropTypes.string,
  }),
}
SearchHeader.defaultProps = {
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
  showSearchAgain: true,
}
