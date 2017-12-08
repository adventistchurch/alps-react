import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, date } from '@storybook/addon-knobs'

import ArticleMeta from './ArticleMeta'

const defaults = {
  name: 'Jane Doe',
  region: 'Silverspring, MD',
  datetime: new Date(),
  dateFormat: '',
}

storiesOf('molecules/components/ArticleMeta', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const name = text('name', defaults.name)
    const region = text('region', defaults.region)
    const datetime = date('date', defaults.datetime)
    const dateFormat = text('dateFormat', defaults.dateFormat)

    return (
      <ArticleMeta
        name={name}
        region={region}
        date={datetime}
        dateFormat={dateFormat}
      />
    )
  })
