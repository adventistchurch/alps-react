import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import usePagination from '../../helpers/usePagination'
import renderItems from '../../helpers/renderItems'

import { Nav } from '../../helpers/Element'
import PaginationItem from './PaginationItem'

const nextIcon = (
  <IconWrap
    name="arrow-bracket-right"
    size="m"
    themeColor="dark"
    spaceLeft="half"
  />
)
const prevIcon = (
  <IconWrap
    name="arrow-bracket-left"
    size="m"
    themeColor="dark"
    spaceRight="half"
  />
)

function Pagination(props) {
  const pages = usePagination(props)

  return (
    <Nav
      className="pagination u-center-block"
      textAlign="center"
      role="navigation"
    >
      {renderItems(pages, PaginationItem)}
    </Nav>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  dividerLabel: PaginationItem.propTypes.label,
  firstLabel: PaginationItem.propTypes.label,
  lastLabel: PaginationItem.propTypes.label,
  nextIcon: PropTypes.element,
  nextLabel: PaginationItem.propTypes.label,
  onPageClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  prevIcon: PropTypes.element,
  prevLabel: PaginationItem.propTypes.label,
  setUrl: PropTypes.func,
  showFirstAndLast: PropTypes.bool,
  showPrevAndNext: PropTypes.bool,
  surrounding: PropTypes.number,
  total: PropTypes.number.isRequired,
}
Pagination.defaultProps = {
  page: 1,
  dividerLabel: '…', // Using actual chat instead of HTLM Entity &hellip.
  firstLabel: 'First',
  lastLabel: 'Last',
  nextIcon: nextIcon,
  prevIcon: prevIcon,
  setUrl: number => `?page=${number}`,
  showFirstAndLast: false,
  showPrevAndNext: true,
  showIconArrows: true,
  surrounding: 3,
}

export default Pagination
