import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import SearchResults from '../organisms/content/SearchResults'
import BlankTemplate from './BlankTemplate'
import SearchContent from '../organisms/content/SearchContent'

export default function Search({ results, searchHeader, ...props }) {
  return (
    <BlankTemplate {...props}>
      <SearchHeader {...searchHeader} />

      <SearchContent>
        <SearchResults results={results} />
      </SearchContent>
    </BlankTemplate>
  )
}

Search.propTypes = {
  results: PropTypes.array,
  searchHeader: PropTypes.object,
}
Search.defaultProps = {
  results: [],
  searchHeader: {},
}
