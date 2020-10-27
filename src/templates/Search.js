import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import SearchResults from '../organisms/content/SearchResults'
import BlankTemplate from './BlankTemplate'
import ArticleContent from '../organisms/content/ArticleContent'

export default function Search({ results, searchHeader, ...props }) {
  return (
    <BlankTemplate {...props}>
      <SearchHeader {...searchHeader} />
      <ArticleContent>
        <SearchResults results={results} />
      </ArticleContent>
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
