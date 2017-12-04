import React from 'react'
import PropTypes from 'prop-types'

import range from '../../helpers/range'

const prevent = ({ event, cb, page = null }) => {
  event.preventDefault()
  return cb ? (page ? cb({ page }) : cb()) : null
}

const Item = ({ label, onClick, prev, next }) => {
  return (
    <a
      href=""
      className={`pagination__page ${
        prev || next ? `pagination__${prev ? 'prev' : 'next'}` : ''
      } theme--secondary-background-color white`}
      onClick={event =>
        prevent({
          event,
          cb: onClick,
          page: prev ? prev : next ? next : label ? label : null,
        })
      }
    >
      {label}
    </a>
  )
}
Item.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  prev: PropTypes.number,
  next: PropTypes.number,
}

const CurrentItem = ({ label }) => {
  return (
    <span className="pagination__page pagination__page--current white bg--gray">
      {label}
    </span>
  )
}
CurrentItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

const Divider = () => {
  return <span className="pagination__divide">&hellip;</span>
}

const generatePages = (total, current, currentOffset, extremesOffset) => {
  let lowerOffset = current - currentOffset
  let higerOffset = current + currentOffset
  const pages = []

  lowerOffset = lowerOffset > 1 ? lowerOffset : 1
  higerOffset = higerOffset < total ? higerOffset : total

  if (lowerOffset > 1) {
    pages.push(range(1, 1 + extremesOffset), null)
  }
  pages.push(range(lowerOffset, higerOffset))

  if (higerOffset < total) {
    pages.push(null, range(total - extremesOffset, total))
  }
  return [].concat(...pages)
}

const renderItems = (pages, currentPage, onPageClick) =>
  pages.map((page, key) => {
    return page === currentPage ? (
      <CurrentItem label={currentPage} key={key} />
    ) : page === null ? (
      <Divider key={key} />
    ) : (
      <Item
        label={page}
        current={page === currentPage}
        onClick={onPageClick}
        key={key}
      />
    )
  })

const Pagination = ({
  totalPages,
  currentPage,
  onPageClick,
  prevLabel,
  onPrevClick,
  nextLabel,
  onNextClick,
  currentOffset,
  extremesOffset,
}) => {
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const pages = generatePages(
    totalPages,
    currentPage,
    currentOffset,
    extremesOffset
  )

  return (
    <nav className="pagination center-block align--center">
      <Item prev={prevPage} label={prevLabel} onClick={onPrevClick} />
      <div className="pagination__pages show-at--medium dib">
        {renderItems(pages, currentPage, onPageClick)}
      </div>
      <Item next={nextPage} label={nextLabel} onClick={onNextClick} />
    </nav>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func,
  prevLabel: PropTypes.string,
  onPrevClick: PropTypes.func,
  nextLabel: PropTypes.string,
  onNextClick: PropTypes.func,
  extremesOffset: PropTypes.number,
  currentOffset: PropTypes.number,
}
Pagination.defaultProps = {
  totalPages: 0,
  currentPage: 1,
  prevLabel: 'Prev',
  nextLabel: 'Next',
  extremesOffset: 1,
  currentOffset: 2,
}

export default Pagination
