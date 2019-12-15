import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'
import Pagination from '../../molecules/navigation/Pagination'

function ListContent({ children, pagination }) {
  return (
    <>
      {children}
      {pagination && (
        <Div space>
          <Pagination {...pagination} />
        </Div>
      )}
    </>
  )
}

ListContent.propTypes = {
  children: PropTypes.node,
  pagination: PropTypes.object,
}

export default ListContent
