import range from './range'

/**
 *
 * @param {object} parameters
 *
 * @returns {Array} - pages
 */
function usePagination({
  dividerLabel,
  firstLabel,
  lastLabel,
  nextIcon,
  nextLabel,
  onNextClick,
  onPageClick,
  onPrevClick,
  page,
  prevLabel,
  prevIcon,
  setUrl,
  showFirstAndLast,
  showPrevAndNext,
  showIconArrows,
  surrounding,
  total: last,
}) {
  const first = 1
  let lowerOffset = page - surrounding
  let higherOffset = page + surrounding
  const lowerLimit = first + surrounding
  const higherLimit = last - surrounding

  // Recalculate offsets
  lowerOffset = lowerOffset - 1 > lowerLimit ? lowerOffset : first
  higherOffset = higherOffset + 1 < higherLimit ? higherOffset : last

  // Initialize pages array
  const pages = []

  // Divider object
  const divider = { isDivider: true, label: dividerLabel }

  // Generates a page object
  function setPage(number, props = {}) {
    return {
      ...props,
      number,
      url: setUrl(number),
      isCurrent: number === page ? true : undefined,
    }
  }

  // Generates pages for given range
  function setPagesForRange(range) {
    return range.map(i => setPage(i, { onClick: onPageClick }))
  }

  // Add links and pages:

  // - First and Prev Links
  if (page > first) {
    // - Link First
    if (showFirstAndLast) {
      pages.push(setPage(first, { label: firstLabel }))
    }

    // - Link Prev
    if (showPrevAndNext) {
      pages.push(
        setPage(page - 1, {
          label: showIconArrows ? prevIcon : prevLabel,
          isPrev: true,
          onClick: onPrevClick,
        })
      )
    }
  }

  // - First numbered pages
  if (lowerOffset > lowerLimit) {
    const firstRange = range(first, first + surrounding)
    pages.push(setPagesForRange(firstRange))
    pages.push(divider)
  }

  // - Middle numbered pages
  const middleRange = range(lowerOffset, higherOffset)
  pages.push(setPagesForRange(middleRange))

  // - Last numbered pages
  if (higherOffset < last) {
    const lastRange = range(last - surrounding, last)
    pages.push(divider)
    pages.push(setPagesForRange(lastRange))
  }

  // - Next and Last Links
  if (page < last) {
    // - Link Next
    if (showPrevAndNext) {
      pages.push(
        setPage(page + 1, {
          label: showIconArrows ? nextIcon : nextLabel,
          isNext: true,
          onClick: onNextClick,
        })
      )
    }

    // - Last page
    if (showFirstAndLast) {
      pages.push(setPage(last, { label: lastLabel }))
    }
  }

  return [].concat(...pages)
}

export default usePagination
