import React from 'react'
// import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import SearchResults from '../organisms/content/SearchResults'
import BlankTemplate from './BlankTemplate'

function Search() {
  return (
    <BlankTemplate>
      <SearchHeader />
      <SearchResults />
    </BlankTemplate>
  )
}

Search.propTypes = {}

export default Search
