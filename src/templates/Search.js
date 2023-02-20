import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import Pagination from '../molecules/navigation/Pagination'
import SearchResults from '../organisms/content/SearchResults'
import BlankTemplate from './BlankTemplate'
import SearchContent from '../organisms/content/SearchContent'

export default function Search({
  results,
  searchHeader,
  pagination,
  ...props
}) {
  return (
    <BlankTemplate {...props}>
      <SearchHeader {...searchHeader} />

      <SearchContent>
        <SearchResults results={results} />
        {pagination && <Pagination {...pagination} />}
      </SearchContent>
    </BlankTemplate>
  )
}

Search.propTypes = {
  pagination: PropTypes.object,
  results: PropTypes.array,
  searchHeader: PropTypes.object,
}
Search.defaultProps = {
  results: [],
  searchHeader: {},
}
