import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

import Pagination from './Pagination'

import data from './Pagination.stories.json'

const onPageClick = () => console.log('Clicked on page') // eslint-disable-line no-console
const onPrevClick = () => console.log('Clicked on prev page') // eslint-disable-line no-console
const onNextClick = () => console.log('Clicked on next page') // eslint-disable-line no-console

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Pagination.defaultProps,
    ...data,
    ...settings,
  }
}

function pagesTab(settings = {}) {
  const { current, surrounding, total, tab } = getTabData('Pages', settings)

  return {
    total: number('Total pages', total, {}, tab),
    current: number('Current page', current, {}, tab),
    surrounding: number('Surrounding', surrounding, {}, tab),
  }
}

function labelsTab({ iconArrows = true, ...settings } = {}) {
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
    prevLabel: iconArrows ? null : text('Prev label', prevLabel, tab),
    nextLabel: iconArrows ? null : text('Next label', nextLabel, tab),
  }
}

function optionsTab(settings = {}) {
  const { showFirstAndLast, showPrevAndNext, linkPrefix, tab } = getTabData(
    'Options',
    settings
  )

  return {
    showFirstAndLast: boolean('Show First & Last', showFirstAndLast, tab),
    showPrevAndNext: boolean('Show Prev & Next', showPrevAndNext, tab),
    linkPrefix: text('Link prefix', linkPrefix, tab),
  }
}

storiesOf('molecules/navigation/Pagination', module)
  .addDecorator(withKnobs)

  .addWithJSX('SVG Arrows (default)', () => {
    const pagesProps = pagesTab()
    const optionsProps = optionsTab()
    const { dividerLabel, firstLabel, lastLabel } = labelsTab()

    const setUrl = number => `${optionsProps.linkPrefix}${number}`

    return (
      <Pagination
        onNextClick={onNextClick}
        onPageClick={onPageClick}
        onPrevClick={onPrevClick}
        setUrl={setUrl}
        dividerLabel={dividerLabel}
        firstLabel={firstLabel}
        lastLabel={lastLabel}
        {...optionsProps}
        {...pagesProps}
      />
    )
  })

  .addWithJSX('Text "Arrows"', () => {
    const pagesProps = pagesTab()
    const optionsProps = optionsTab()
    const labelsProps = labelsTab({ iconArrows: false })

    const setUrl = number => `${optionsProps.linkPrefix}${number}`

    const props = {
      onNextClick,
      onPageClick,
      onPrevClick,
      setUrl,
      ...labelsProps,
      ...optionsProps,
      ...pagesProps,
    }

    return <Pagination {...props} />
  })
