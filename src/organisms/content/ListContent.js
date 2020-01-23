import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import Pagination from '../../molecules/navigation/Pagination'

function ListContent({ children, pagination, title, linkUrl, linkLabel }) {
  return (
    <Div className="c-block-wrap" spacingSize="double" paddingSide="right">
      {title && (
        <HeadingBlock title={title} linkText={linkLabel} url={linkUrl} />
      )}
      <Div className="c-block-wrap__content" spacingSize="double">
        {children}
      </Div>
      {pagination && <Pagination {...pagination} />}
    </Div>
  )
}

ListContent.propTypes = {
  children: PropTypes.node,
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string,
  pagination: PropTypes.object,
  title: PropTypes.string,
}
ListContent.propTypes = {
  linkLabel: 'See all',
  linkUrl: '#',
}

export default ListContent
