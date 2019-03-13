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
    spaceSide="left"
    spaceSize="half"
  />
)
const prevIcon = (
  <IconWrap
    name="arrow-bracket-left"
    size="m"
    themeColor="dark"
    spaceSide="right"
    spaceSize="half"
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
  current: PropTypes.number,
  dividerLabel: PaginationItem.propTypes.label,
  firstLabel: PaginationItem.propTypes.label,
  lastLabel: PaginationItem.propTypes.label,
  nextLabel: PaginationItem.propTypes.label,
  onPageClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  prevLabel: PaginationItem.propTypes.label,
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
  nextLabel: nextIcon,
  prevLabel: prevIcon,
  setUrl: number => `?page=${number}`,
  showFirstAndLast: false,
  showPrevAndNext: true,
  surrounding: 3,
}

export default Pagination
