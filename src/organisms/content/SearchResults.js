import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Text from '../../atoms/texts/Text'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import renderItems from '../../helpers/renderItems'

function SearchResults({
  loadMoreLabel,
  loadMoreUrl,
  onLoadMore,
  results,
  showLoadMore,
}) {
  return (
    <Text className="c-search-results" spacingSize="double">
      {renderItems(results, ContentBlock)}

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
  loadMoreLabel: PropTypes.string,
  loadMoreUrl: PropTypes.string,
  onLoadMore: PropTypes.func,
  showLoadMore: PropTypes.bool,
}
SearchResults.defaultProps = {
  results: [],
  loadMoreLabel: 'Load More',
  showLoadMore: true,
}

export default SearchResults
