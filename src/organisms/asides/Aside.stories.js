import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import Aside from './Aside'
import data from './Aside.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Aside.defaultProps,
    ...data,
    ...settings,
  }
}

export function asideTab(settings = {}) {
  const { primary, secondary, tab } = getTabData('Blocks', settings)

  return {
    primary: object('Primary Blocks *', primary, tab),
    secondary: object('Secondary Blocks', secondary, tab),
  }
}

storiesOf('organisms/asides/Aside', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { primary, secondary } = asideTab()

    return <Aside primary={primary} secondary={secondary} />
  })
