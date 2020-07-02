import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Text from '../../atoms/texts/Text'
import { Paragraph } from '../../helpers/Element'
import ContentBlock from '../../molecules/blocks/ContentBlock'

function SearchResults({
  learnMoreLabel,
  loadMoreLabel,
  loadMoreUrl,
  noResultsLabel,
  onLoadMore,
  results,
  showLoadMore,
}) {
  return (
    <Text className="c-search-results" spacingSize="double">
      {Array.isArray(results) && results.length > 0 ? (
        results.map(({ cta, ...rest }, i) => (
          <ContentBlock
            key={`result-item-${i}`}
            titleSize="m"
            cta={cta || learnMoreLabel}
            {...rest}
          />
        ))
      ) : (
        <Paragraph>{noResultsLabel}</Paragraph>
      )}

      {showLoadMore && (
        <Button
          as="a"
          url={loadMoreUrl}
          onClick={onLoadMore}
          spaceSide="left"
          text={loadMoreLabel}
        />
      )}
    </Text>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array,
  learnMoreLabel: PropTypes.string,
  loadMoreLabel: PropTypes.string,
  loadMoreUrl: PropTypes.string,
  noResultsLabel: PropTypes.string,
  onLoadMore: PropTypes.func,
  showLoadMore: PropTypes.bool,
}
SearchResults.defaultProps = {
  results: [],
  learnMoreLabel: 'Learn More',
  loadMoreLabel: 'Load More',
  noResultsLabel: 'No results',
  showLoadMore: false,
}

export default SearchResults
