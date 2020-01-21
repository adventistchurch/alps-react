import React from 'react'
// import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import SearchResults from '../organisms/content/SearchResults'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function Search() {
  return (
    <TemplateWrap>
      <Main>
        <SearchHeader />
        <SearchResults />
      </Main>
    </TemplateWrap>
  )
}

Search.propTypes = {}

export default Search
