import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import { Paragraph, Div } from '../../helpers/Element'
import ContentBlock from '../../molecules/blocks/ContentBlock'

export default function SearchResults({
  loadMoreLabel,
  loadMoreUrl,
  noResultsLabel,
  onLoadMore,
  results,
  showLoadMore,
}) {
  return (
    <Div className="c-search-results" spacing="double">
      {Array.isArray(results) && results.length > 0 ? (
        results.map((props, i) => (
          <ContentBlock key={`result-item-${i}`} titleSize="m" {...props} />
        ))
      ) : (
        <Paragraph>{noResultsLabel}</Paragraph>
      )}

      {showLoadMore && (
        <Button
          as="a"
          url={loadMoreUrl}
          onClick={onLoadMore}
          text={loadMoreLabel}
          spaceLeft
        />
      )}
    </Div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array,
  loadMoreLabel: PropTypes.string,
  loadMoreUrl: PropTypes.string,
  noResultsLabel: PropTypes.string,
  onLoadMore: PropTypes.func,
  showLoadMore: PropTypes.bool,
}
SearchResults.defaultProps = {
  results: [],
  loadMoreLabel: 'Load More',
  noResultsLabel: 'No results',
  showLoadMore: false,
}
