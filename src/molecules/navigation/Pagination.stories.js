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

export function paginationTab(settings = {}) {
  const {
    page,
    surrounding,
    total,
    showFirstAndLast,
    showPrevAndNext,
    showIconArrows,
    linkPrefix,
    dividerLabel,
    firstLabel,
    lastLabel,
    nextLabel,
    prevLabel,
    tab,
  } = getTabData('Pagination', settings)

  const setUrl = number => `${linkPrefix} ${number}`

  return {
    total: number('Total pages', total, {}, tab),
    page: number('Current page', page, {}, tab),
    surrounding: number('Surrounding', surrounding, {}, tab),
    firstLabel: text('First label', firstLabel, tab),
    lastLabel: text('Last label', lastLabel, tab),
    dividerLabel: text('Divider', dividerLabel, tab),
    prevLabel: text('Prev label', prevLabel, tab),
    nextLabel: text('Next label', nextLabel, tab),
    showFirstAndLast: boolean('Show First & Last', showFirstAndLast, tab),
    showPrevAndNext: boolean('Show Prev & Next', showPrevAndNext, tab),
    showIconArrows: boolean('Show Icon Arrows', showIconArrows, tab),
    linkPrefix: text('Link prefix', linkPrefix, tab),
    onPrevClick,
    onNextClick,
    onPageClick,
    setUrl,
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
