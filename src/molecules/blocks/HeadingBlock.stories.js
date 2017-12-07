import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import HeadingBlock from './HeadingBlock'
import * as colors from '../../atoms/global/colors'

const defaults = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  cta: 'Find out more',
  url: 'https://adventist.org',
  hasBorder: true,
  borderColor: 'emperor',
  className: '',
  contentClass: '',
}

storiesOf('molecules/blocks/HeadingBlock', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const showCta = boolean('showCta', false)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    return (
      <HeadingBlock
        title={title}
        description={description}
        cta={showCta ? cta : null}
        url={url}
      />
    )
  })

  .add('with border', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const hasBorder = boolean('hasBorder', defaults.hasBorder)
    const borderColor = select(
      'borderColor',
      [...colors.primary, ...colors.secondary],
      defaults.borderColor
    )
    const className = text('className', defaults.className)
    const contentClass = text('contentClass', defaults.contentClass)
    return (
      <HeadingBlock
        title={title}
        description={description}
        cta={cta}
        url={url}
        hasBorder={hasBorder}
        borderColor={borderColor}
        className={className}
        contentClass={contentClass}
      />
    )
  })
