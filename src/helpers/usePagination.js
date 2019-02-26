import range from './range'

/**
 *
 * @param {object} parameters
 *
 * @returns {Array} - pages
 */
function usePagination({
  current,
  dividerLabel,
  firstLabel,
  lastLabel,
  nextLabel,
  onNextClick,
  onPageClick,
  onPrevClick,
  prevLabel,
  setUrl,
  showFirstAndLast,
  showPrevAndNext,
  surrounding,
  total: last,
}) {
  const first = 1
  let lowerOffset = current - surrounding
  let higerOffset = current + surrounding
  const lowerLimit = first + surrounding
  const higerLimit = last - surrounding

  // Recalculate offsets
  lowerOffset = lowerOffset - 1 > lowerLimit ? lowerOffset : first
  higerOffset = higerOffset + 1 < higerLimit ? higerOffset : last

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
      isCurrent: number === current ? true : undefined,
    }
  }

  // Generates pages for given range
  function setPagesForRange(range) {
    return range.map(i => setPage(i, { onClick: onPageClick }))
  }

  // Add links and pages:

  // - First and Prev Links
  if (current > first) {
    // - Link First
    if (showFirstAndLast) {
      pages.push(setPage(first, { label: firstLabel }))
    }

    // - Link Prev
    if (showPrevAndNext) {
      pages.push(
        setPage(current - 1, {
          label: prevLabel,
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
  const middleRange = range(lowerOffset, higerOffset)
  pages.push(setPagesForRange(middleRange))

  // - Last numbered pages
  if (higerOffset < last) {
    const lastRange = range(last - surrounding, last)
    pages.push(divider)
    pages.push(setPagesForRange(lastRange))
  }

  // - Next and Last Links
  if (current < last) {
    // - Link Next
    if (showPrevAndNext) {
      pages.push(
        setPage(current + 1, {
          label: nextLabel,
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
