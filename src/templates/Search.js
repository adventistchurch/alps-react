import React from 'react'
// import PropTypes from 'prop-types'

import SearchHeader from '../molecules/forms/SearchHeader'
import SearchResults from '../organisms/content/SearchResults'
import ArticleWrap from '../organisms/content/ArticleWrap'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function Search() {
  return (
    <TemplateWrap>
      <Main>
        <SearchHeader />
        <ArticleWrap
          paddingSize="zero"
          paddingSide="sides"
          shiftAt="large"
          spacingUntil="xxlarge"
          wrap="6"
        >
          <SearchResults />
        </ArticleWrap>
      </Main>
    </TemplateWrap>
  )
}

Search.propTypes = {}

export default Search
