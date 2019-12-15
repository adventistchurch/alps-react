import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'

import Pagination from './Pagination'

import data from './Pagination.stories.json'

const onPageClick = () => console.log('Clicked on page') // eslint-disable-line no-console
const onPrevClick = () => console.log('Clicked on prev page') // eslint-disable-line no-console
const onNextClick = () => console.log('Clicked on next page') // eslint-disable-line no-console

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Pagination.defaultProps,
    ...data.default,
    ...settings,
  }
}

function pagesTab(settings = {}) {
  const { page, surrounding, total, tab } = getTabData('Pages', settings)

  return {
    total: number('Total pages', total, {}, tab),
    page: number('Current page', page, {}, tab),
    surrounding: number('Surrounding', surrounding, {}, tab),
  }
}

function labelsTab({ showIconArrows, ...settings } = {}) {
  const {
    dividerLabel,
    firstLabel,
    lastLabel,
    nextLabel,
    prevLabel,
    tab,
  } = getTabData('Labels', settings)

  return {
    firstLabel: text('First label', firstLabel, tab),
    lastLabel: text('Last label', lastLabel, tab),
    dividerLabel: text('Divider', dividerLabel, tab),
    prevLabel: showIconArrows ? null : text('Prev label', prevLabel, tab),
    nextLabel: showIconArrows ? null : text('Next label', nextLabel, tab),
  }
}

function optionsTab(settings = {}) {
  const {
    showFirstAndLast,
    showPrevAndNext,
    showIconArrows,
    linkPrefix,
    tab,
  } = getTabData('Options', settings)

  return {
    showFirstAndLast: boolean('Show First & Last', showFirstAndLast, tab),
    showPrevAndNext: boolean('Show Prev & Next', showPrevAndNext, tab),
    showIconArrows: boolean('Show Icon Arrows', showIconArrows, tab),
    linkPrefix: text('Link prefix', linkPrefix, tab),
  }
}

export function paginationTab(settings = {}) {
  const pagesProps = pagesTab(settings)
  const optionsProps = optionsTab(settings)
  const labelsProps = labelsTab(settings)

  const setUrl = number => `${optionsProps.linkPrefix}${number}`

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setUrl,
    ...labelsProps,
    ...optionsProps,
    ...pagesProps,
  }
}

storiesOf('molecules/navigation/Pagination', module)
  .addWithJSX('SVG Arrows (default)', () => {
    const props = paginationTab()

    return <Pagination {...props} />
  })

  .addWithJSX('Text "Arrows"', () => {
    const props = paginationTab(data.textArrows)

    return <Pagination {...props} />
  })
