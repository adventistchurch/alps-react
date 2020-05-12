import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

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

// TODO: Add search and content knobs
export function asideTab(settings = {}) {
  const { primary, secondary, tab } = getTabData('Aside', settings)

  return {
    primary: object('Primary Blocks *', primary, tab),
    secondary: object('Secondary Blocks', secondary, tab),
  }
}

storiesOf('organisms/asides/Aside', module).addWithJSX('Default', () => {
  const { primary, secondary } = asideTab()

  return <Aside primary={primary} secondary={secondary} />
})
