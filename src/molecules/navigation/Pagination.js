import React from 'react'
import PropTypes from 'prop-types'

import usePagination from '../../helpers/usePagination'
import renderItems from '../../helpers/renderItems'

import PaginationItem from './PaginationItem'

function Pagination(props) {
  const pages = usePagination(props)

  return (
    <nav
      className="pagination u-center-block u-text-align--center"
      role="navigation"
    >
      {renderItems(pages, PaginationItem)}
    </nav>
  )
}

Pagination.propTypes = {
  current: PropTypes.number,
  dividerLabel: PropTypes.string,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  onPageClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  prevLabel: PropTypes.string,
  setUrl: PropTypes.func,
  showFirstAndLast: PropTypes.bool,
  showPrevAndNext: PropTypes.bool,
  surrounding: PropTypes.number,
  total: PropTypes.number.isRequired,
}
Pagination.defaultProps = {
  current: 1,
  dividerLabel: '…', // Using actual chat instead of HTLM Entity &hellip.
  firstLabel: 'First',
  lastLabel: 'Last',
  nextLabel: 'Next',
  prevLabel: 'Prev',
  setUrl: number => `?page=${number}`,
  showFirstAndLast: false,
  showPrevAndNext: true,
  surrounding: 3,
}

export default Pagination
