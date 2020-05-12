import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import Pagination from '../../molecules/navigation/Pagination'

function ListContent({
  children,
  contentSpacing,
  pagination,
  title,
  linkUrl,
  linkLabel,
  ...props
}) {
  return (
    <Div className="c-block-wrap" {...props}>
      {title && (
        <HeadingBlock title={title} linkText={linkLabel} url={linkUrl} />
      )}
      <Div className="c-block-wrap__content" spacingSize={contentSpacing}>
        {children}
      </Div>
      {pagination && <Pagination {...pagination} />}
    </Div>
  )
}

ListContent.propTypes = {
  children: PropTypes.node,
  contentSpacing: PropTypes.string,
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  pagination: PropTypes.object,
  title: PropTypes.string,
}
ListContent.defaultProps = {
  spacing: true,
  contentSpacing: 'double',
  linkLabel: 'See all',
  linkUrl: '#',
}

export default ListContent
