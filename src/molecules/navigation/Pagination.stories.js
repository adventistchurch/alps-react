import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

import Pagination from './Pagination'

import data from './Pagination.stories.json'

const propsTab = 'Props'
const labelsTab = 'Labels'

storiesOf('molecules/navigation/Pagination', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    // Config
    const total = number('Total pages', data.total, {}, propsTab)
    const current = number('Current page', data.current, {}, propsTab)
    const surrounding = number('Surrounding', data.surrounding, {}, propsTab)
    const showFirstAndLast = boolean(
      'Show First & Last',
      data.showFirstAndLast,
      propsTab
    )
    const showPrevAndNext = boolean(
      'Show Prev & Next',
      data.showPrevAndNext,
      propsTab
    )
    const linkPrefix = text('Link prefix', data.linkPrefix, propsTab)

    // Labels:
    const dividerLabel = text('First label', data.dividerLabel, labelsTab)
    const firstLabel = text('First label', data.firstLabel, labelsTab)
    const lastLabel = text('Last label', data.lastLabel, labelsTab)
    const nextLabel = text('Next label', data.nextLabel, labelsTab)
    const prevLabel = text('Prev label', data.prevLabel, labelsTab)

    const onPageClick = () => console.log('Clicked on page') // eslint-disable-line no-console
    const onPrevClick = () => console.log('Clicked on prev page') // eslint-disable-line no-console
    const onNextClick = () => console.log('Clicked on next page') // eslint-disable-line no-console

    const setUrl = number => `${linkPrefix}${number}`

    const props = {
      dividerLabel,
      firstLabel,
      lastLabel,
      total,
      current,
      onPageClick,
      prevLabel,
      onPrevClick,
      nextLabel,
      onNextClick,
      setUrl,
      showFirstAndLast,
      showPrevAndNext,
      surrounding,
    }

    return <Pagination {...props} />
  })
